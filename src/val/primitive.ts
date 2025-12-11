import { js_val_base } from "./base.js";
import type { js_val_range } from "./base.js";

export type to_prim_type<T> =
    T extends string ? "string" :
    T extends number ? "number" | "integer" :
    T extends boolean ? "boolean" :
    "string" | "number" | "integer" | "boolean";

export class js_val_primitive<T=any> extends js_val_base<T> {

    #type: to_prim_type<any>;
    constructor(type: to_prim_type<T>) {
        super();
        this.#type = type;
    }


    #length?: js_val_range;
    length(length: js_val_range) {
        this.#length = length;
        return this;
    }


    #size?: js_val_range;
    size(size: js_val_range) {
        this.#size = size;
        return this;
    }


    #values?: any[];
    values<V=T>(...values: V[]) {
        this.#values = values;
        return this;
    }


    check(data: any): boolean {
        // null | undefined チェック
        if (!this.checkNull(data)) return false;
        if (data === null || data === undefined) return true;
        // 固定値チェック
        if (this.checkValues(data)) return true;
        if (this.#values !== undefined && this.#values.includes(data)) return true;


        // 型ごとのチェック
        if (this.#type === "string") {
            if (typeof data !== "string") return false;
            const len = this.#length;
            // 長さの指定がなければ通過
            if (len === undefined) return true;
            const data_length = data.length;
            // 長さの指定が数値ならそれと比較
            if (typeof len === "number") return data_length === len;
            const { min, max } = len;
            // 範囲指定がある場合はそれと比較
            if (min !== undefined && data_length < min) return false;
            if (max !== undefined && data_length > max) return false;
            return true;
            
        } else if (this.#type === "number" || this.#type === "integer") {
            if (typeof data !== "number") return false;
            if (this.#type === "integer" && !Number.isInteger(data)) return false;
            const size = this.#size;
            // サイズの指定がなければ通過
            if (size === undefined) return true;
            // サイズの指定が数値ならそれと比較
            if (typeof size === "number") return data === size;
            const { min, max } = size;
            // 範囲指定がある場合はそれと比較
            if (min !== undefined && data < min) return false;
            if (max !== undefined && data > max) return false;
            return true;

        } else if (this.#type === "boolean") {
            if (typeof data !== "boolean") return false;
            return true;

        }
        return false;

    }
    
}
