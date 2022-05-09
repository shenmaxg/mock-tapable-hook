/* eslint-disable no-new-func */
export default class SimpleSyncHook {
    constructor(args = []) {
        this.args = args;
        this.taps = [];
        this.fn = undefined;
    }

    compile() {
        const fn = new Function(
            this.args.join(', '),
            `"use strict";\n${this.content()}`
        );

        this.fn = fn;
    }

    call(...args) {
        this.compile();

        return this.fn(...args);
    }

    tap(name, fn) {
        this.taps.push({ name, fn });
    }

    content() {
        let code = 'var _taps = this.taps;\n';
        for (let i = 0; i < this.taps.length; i += 1) {
            code += `var _fn${i} = _taps[${i}].fn;\n`;

            code += `_fn${i}(${this.args.join(', ')});\n`;
        }

        return code;
    }
}
