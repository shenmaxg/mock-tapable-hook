/* eslint-disable no-new-func */
export default class SimpleSyncBailHook {
    constructor(args = []) {
        this.args = args;
        this.taps = [];
        this.fn = undefined;
    }

    compile() {
        const fn = new Function(
            this.args.join(', '),
            `"use strict";\n${this.create()}`
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

    create() {
        let code = this.header();
        code += this.content(0);
        return code;
    }

    header() {
        return 'var _taps = this.taps;\n';
    }

    content(i) {
        if (i >= this.taps.length) {
            return '';
        }
        let code = `var _fn${i} = _taps[${i}].fn;\n`;

        code += `var _result${i} = _fn${i}(${this.args.join(', ')});\n`;
        code += `if(_result${i} !== undefined) {\n return _result${i};\n} else {\n${this.content(i + 1)}}\n`;

        return code;
    }
}
