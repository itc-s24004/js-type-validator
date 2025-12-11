import { type js_val_builder_call } from "../index.js";
import { js_val_base } from "./base.js";
export declare class js_val_union<T> extends js_val_base<T> {
    #private;
    constructor();
    types(...calls: js_val_builder_call<T>[]): this;
    check(data: any): boolean;
}
//# sourceMappingURL=union.d.ts.map