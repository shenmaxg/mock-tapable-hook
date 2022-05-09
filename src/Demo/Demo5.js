import SimpleSyncBailHook from '../Hook/SimpleSyncBailHook';

const hook1 = new SimpleSyncBailHook(['arg']);

hook1.tap('1', (arg) => {
    console.log(1, arg);
});

hook1.tap('2', (arg) => {
    console.log(2, arg);
    return 2;
});

hook1.tap('3', (arg) => {
    console.log(3, arg);
});

hook1.call('shenmaxg');
