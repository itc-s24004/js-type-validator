import { type js_val_builder } from "../index";
import { js_val_base } from "./base";
import type { js_val_range, to_jv_type } from "./base";
export declare class js_val_array<T> extends js_val_base<T> {
    #private;
    length(length: js_val_range): this;
    items(...calls: ((checker: js_val_builder<to_jv_type<T>>) => js_val_base<T>)[]): this;
    check(data: any): boolean;
}
//# sourceMappingURL=array.d.ts.map