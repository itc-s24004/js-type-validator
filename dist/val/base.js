export class js_val_base {
    #notNull = false;
    notNull() {
        this.#notNull = true;
        return this;
    }
    checkNull(value) {
        if (this.#notNull && (value === null || value === undefined))
            return false;
        return true;
    }
    #values;
    values(...values) {
        this.#values = values;
        return this;
    }
    #customValueChecks = [];
    customValueCheck(...checks) {
        this.#customValueChecks = checks;
        return this;
    }
    checkValues(data) {
        if (this.#values !== undefined)
            return this.#values.includes(data);
        return false;
    }
    check(data) {
        return this.checkNull(data) && this.checkValues(data);
    }
}
//# sourceMappingURL=base.js.map