import { js_val, type js_val_builder, type js_val_builder_call } from "../index";
import { js_val_base } from "./base";

export class js_val_union<T> extends js_val_base<T> {
    constructor() {
        super();
    }

    #checkers: js_val_base<any>[] = [];
    types(...calls: js_val_builder_call<T>[]) {
        const builder = js_val<T>();
        this.#checkers = calls.map( (call) => call(builder) );
        return this;
    }

    check(data: any): boolean {
        // null | undefined チェック
        if (!this.checkNull(data)) return false;
        if (data === null || data === undefined) return true;

        // 型ごとのチェック
        return this.#checkers.some( (checker) => checker.check(data) );
    }
}