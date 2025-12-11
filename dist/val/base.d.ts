export type to_jv_type_str<T, deep extends boolean = true> = T extends any[] ? (deep extends true ? to_jv_type_str<T[number], false> : "array") : T extends string ? "string" : T extends number ? "number" | "integer" : T extends boolean ? "boolean" : "string" | "number" | "integer" | "boolean";
export type to_jv_type<T> = T extends any[] ? T[number] : T;
export type js_val_range = {
    min?: number;
    max?: number;
} | number;
export declare class js_val_base<T = any> {
    #private;
    notNull(): this;
    checkNull(value: any): boolean;
    values<V = T>(...values: V[]): this;
    customValueCheck(...checks: js_val_base<T>[]): this;
    checkValues(data: any): boolean;
    check(data: any): boolean;
}
//# sourceMappingURL=base.d.ts.map