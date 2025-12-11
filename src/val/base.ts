
export type to_jv_type_str<T, deep extends boolean = true> =
    T extends any[] ? (deep extends true ? to_jv_type_str<T[number], false> : "array") :
    T extends string ? "string" :
    T extends number ? "number" | "integer" :
    T extends boolean ? "boolean" :
    "string" | "number" | "integer" | "boolean";

export type to_jv_type<T> = T extends any[] ? T[number] : T;


export type js_val_range = {
    min?: number;
    max?: number;
} | number;


type IsUnion<T, U = T> = T extends U ? ([U] extends [T] ? false : true) : never;

export class js_val_base<T=any> {
    #notNull: boolean = false;
    notNull() {
        this.#notNull = true;
        return this;
    }

    checkNull(value: any): boolean {
        if (this.#notNull && (value === null || value === undefined)) return false;
        return true;
    }

    #values?: any[];
    values<V=T>(...values: V[]) {
        this.#values = values;
        return this;
    }

    #customValueChecks: js_val_base<any>[] = [];
    customValueCheck(...checks: js_val_base<T>[]) {
        this.#customValueChecks = checks;
        return this;
    }

    checkValues(data: any): boolean {
        if (this.#values !== undefined) return this.#values.includes(data);
        return false;
    }


    check(data: any): boolean {
        return this.checkNull(data) && this.checkValues(data);
    }
}
