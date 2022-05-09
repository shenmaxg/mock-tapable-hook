import { SyncBailHook } from 'tapable';

const hook = new SyncBailHook(['arg']);

hook.tap('1', (arg) => {
    console.log(1, arg);
});

hook.tap('2', (arg) => {
    console.log(2, arg);
    return 2;
});

hook.tap('3', (arg) => {
    console.log(3, arg);
});

hook.call('shenmaxg');
