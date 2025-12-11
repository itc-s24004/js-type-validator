import { js_val, type js_val_builder } from "../index";
import type {} from "../index";
import { js_val_base } from "./base";
import type { js_val_range, to_jv_type } from "./base";

export class js_val_array<T> extends js_val_base<T> {
    #length?: js_val_range;
    length(length: js_val_range) {
        this.#length = length;
        return this;
    }


    #itemChecks: js_val_base<any>[] = [];
    items( ...calls: ((checker: js_val_builder<to_jv_type<T>>) => js_val_base<T>)[] ) {
        const checker = js_val<to_jv_type<T>>();
        this.#itemChecks = calls.map( (call) => call(checker) );
        return this;
    }


    check(data: any): boolean {
        // null | undefined チェック
        if (!this.checkNull(data)) return false;
        if (data === null || data === undefined) return true;
        // 配列型チェック
        if (!Array.isArray(data)) return false;

        // 長さのチェック
        if (this.#length !== undefined) {
            const len = data.length;
            if (typeof this.#length === "number") {
                if (len !== this.#length) return false;
            } else {
                const { min, max } = this.#length;
                if (min !== undefined && len < min) return false;
                if (max !== undefined && len > max) return false;
            }
        }
        // アイテムごとのチェック
        return !data.some((item: any) => !this.#itemChecks.some((val) => val.check(item)) );
    }
}