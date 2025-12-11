import { js_val } from "../index";
import { js_val_base } from "./base";
export class js_val_array extends js_val_base {
    #length;
    length(length) {
        this.#length = length;
        return this;
    }
    #itemChecks = [];
    items(...calls) {
        const checker = js_val();
        this.#itemChecks = calls.map((call) => call(checker));
        return this;
    }
    check(data) {
        // null | undefined チェック
        if (!this.checkNull(data))
            return false;
        if (data === null || data === undefined)
            return true;
        // 配列型チェック
        if (!Array.isArray(data))
            return false;
        // 長さのチェック
        if (this.#length !== undefined) {
            const len = data.length;
            if (typeof this.#length === "number") {
                if (len !== this.#length)
                    return false;
            }
            else {
                const { min, max } = this.#length;
                if (min !== undefined && len < min)
                    return false;
                if (max !== undefined && len > max)
                    return false;
            }
        }
        // アイテムごとのチェック
        return !data.some((item) => !this.#itemChecks.some((val) => val.check(item)));
    }
}
//# sourceMappingURL=array.js.map