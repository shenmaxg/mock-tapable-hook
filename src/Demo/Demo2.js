import { AsyncSeriesHook } from 'tapable';

const hook = new AsyncSeriesHook(['arg']);

hook.tapAsync('async hook1', (arg, cb) => {
    setTimeout(() => {
        console.log(`async hook ${arg}`);
        cb();
    }, 2000);
});

hook.tap('sync hook', (arg) => {
    console.log(`sync hook ${arg}`);
});

hook.tapPromise('promise hook', (arg) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(`promise hook ${arg}`);
        resolve();
    }, 2000);
}));

hook.callAsync('shenmaxg', () => {
    console.log('done');
});

// async hook shenmaxg       两秒后打印
// sync hook shenmaxg        紧跟上一个打印
// promise hook shenmaxg     一秒后打印
// done                      最后打印
