import { js_val } from "../index.js";
import { js_val_base } from "./base.js";
export class js_val_object extends js_val_base {
    #values = {};
    prop(key, call) {
        const builder = js_val();
        this.#values[key] = call(builder);
        return this;
    }
    check(data) {
        // null | undefined チェック
        if (!this.checkNull(data))
            return false;
        if (data === null || data === undefined)
            return true;
        // オブジェクト型チェック
        if (typeof data !== "object")
            return false;
        // プロパティごとのチェック
        return !Object.entries(this.#values).some(([key, val]) => !val.check(data[key]));
    }
}
//# sourceMappingURL=object.js.map