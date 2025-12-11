import { js_val_base } from "./val/base.js";
import { js_val_primitive } from "./val/primitive.js";
import { js_val_array } from "./val/array.js";
import { js_val_object } from "./val/object.js";
import { js_val_union } from "./val/union.js";
export function js_val() {
    const builder = {
        any: () => new js_val_base(),
        union: () => new js_val_union(),
        primitive: (type) => new js_val_primitive(type),
        array: () => new js_val_array(),
        object: () => new js_val_object()
    };
    return builder;
}
//# sourceMappingURL=index.js.map