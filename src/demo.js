const hook1 = new SimpleSyncHook(['arg1', 'arg2']);
hook1.tap('1', (arg1, arg2) => {
    console.log(1, arg1, arg2);
});
hook1.tap('2', (arg1, arg2) => {
    console.log(2, arg1, arg2);
});

hook1.call('a', 'b');

// const hook = new SyncBailHook(['arg']);

// hook.tap('1', (arg) => {
//     console.log(1, arg);
//     return 1;
// });

// hook.tap('2', (arg) => {
//     console.log(2, arg);
// });

// hook.tap('3', (arg) => {
//     console.log(3, arg);
// });

// hook.call('a');

const hook1 = new SimpleSyncBailHook(['arg']);

hook1.tap('1', (arg) => {
    console.log(1, arg);
    return 1;
});

hook1.tap('2', (arg) => {
    console.log(2, arg);
    return 2;
});

hook1.tap('3', (arg) => {
    console.log(3, arg);
});

hook1.call('a');
