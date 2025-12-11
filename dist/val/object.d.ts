import { type js_val_builder_call } from "../index.js";
import { js_val_base } from "./base.js";
export declare class js_val_object<T = any> extends js_val_base<T> {
    #private;
    prop<K extends keyof T>(key: K extends never ? string : K, call: js_val_builder_call<T[K]>): this;
    check(data: any): boolean;
}
//# sourceMappingURL=object.d.ts.map