import { js_val_base } from "./val/base";
import { js_val_primitive} from "./val/primitive";
import type { to_prim_type } from "./val/primitive";
import { js_val_array } from "./val/array";
import { js_val_object } from "./val/object";
import { js_val_union } from "./val/union";


export type js_val_builder<T> = {
    any: () => js_val_base<T>;
    union: () => js_val_union<T>;
    primitive: (type: to_prim_type<T>) => js_val_primitive<T>;
    array: () => js_val_array<T>;
    object: () => js_val_object<T>;
}


export type js_val_builder_call<T> = (builder: js_val_builder<T>) => js_val_base<T>;


export function js_val<T>() {

    const builder: js_val_builder<T> = {
        any: () => new js_val_base<T>(),
        union: () => new js_val_union<T>(),
        primitive: <V extends to_prim_type<T>>(type: V) => new js_val_primitive<T>(type),
        array: () => new js_val_array<T>(),
        object: () => new js_val_object<T>()
    };

    return builder;
}