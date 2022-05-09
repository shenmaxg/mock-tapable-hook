import SimpleSyncHook from '../Hook/SimpleSyncHook';

const hook1 = new SimpleSyncHook(['arg']);

hook1.tap('hook1', (arg) => {
    console.log('hook1', arg);
});
hook1.tap('hook2', (arg) => {
    console.log('hook2', arg);
});

hook1.call('shenmaxg');
