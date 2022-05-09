// 传统的发布订阅模式
export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, ...arg) {
        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i += 1) {
                this.events[eventName][i](...arg);
            }
        }
    }
}
