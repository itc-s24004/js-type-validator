import { js_val_base } from "./base";
import type { js_val_range } from "./base";
export type to_prim_type<T> = T extends string ? "string" : T extends number ? "number" | "integer" : T extends boolean ? "boolean" : "string" | "number" | "integer" | "boolean";
export declare class js_val_primitive<T = any> extends js_val_base<T> {
    #private;
    constructor(type: to_prim_type<T>);
    length(length: js_val_range): this;
    size(size: js_val_range): this;
    values<V = T>(...values: V[]): this;
    check(data: any): boolean;
}
//# sourceMappingURL=primitive.d.ts.map