import { js_val_base } from "./val/base.js";
import { js_val_primitive } from "./val/primitive.js";
import type { to_prim_type } from "./val/primitive.js";
import { js_val_array } from "./val/array.js";
import { js_val_object } from "./val/object.js";
import { js_val_union } from "./val/union.js";
export type js_val_builder<T> = {
    any: () => js_val_base<T>;
    union: () => js_val_union<T>;
    primitive: (type: to_prim_type<T>) => js_val_primitive<T>;
    array: () => js_val_array<T>;
    object: () => js_val_object<T>;
};
export type js_val_builder_call<T> = (builder: js_val_builder<T>) => js_val_base<T>;
export declare function js_val<T>(): js_val_builder<T>;
//# sourceMappingURL=index.d.ts.map