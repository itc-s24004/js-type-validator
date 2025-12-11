import { js_val } from "../index.js";
import { js_val_base } from "./base.js";
export class js_val_union extends js_val_base {
    constructor() {
        super();
    }
    #checkers = [];
    types(...calls) {
        const builder = js_val();
        this.#checkers = calls.map((call) => call(builder));
        return this;
    }
    check(data) {
        // null | undefined チェック
        if (!this.checkNull(data))
            return false;
        if (data === null || data === undefined)
            return true;
        // 型ごとのチェック
        return this.#checkers.some((checker) => checker.check(data));
    }
}
//# sourceMappingURL=union.js.map