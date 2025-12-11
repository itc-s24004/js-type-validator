import { js_val, type js_val_builder_call } from "../index.js";
import { js_val_base } from "./base.js";


export class js_val_object<T = any> extends js_val_base<T> {
    #values: { [key: string]: js_val_base } = {};


    prop<K extends keyof T>(key: K extends never ? string : K, call: js_val_builder_call<T[K]>) {
        const builder = js_val();
        this.#values[key as string] = call(builder);
        return this;
    }

    check(data: any): boolean {
        // null | undefined チェック
        if (!this.checkNull(data)) return false;
        if (data === null || data === undefined) return true;
        // オブジェクト型チェック
        if (typeof data !== "object") return false;

        // プロパティごとのチェック
        return !Object.entries(this.#values).some(([key, val]) => !val.check(data[key]) );
    }
}