import { SyncHook } from 'tapable';

// 定义钩子
const hook = new SyncHook(['arg']);

// 钩子上注册插件
hook.tap('hook1', (arg) => {
    console.log('hook1', arg);
});
hook.tap('hook2', (arg) => {
    console.log('hook2', arg);
});

// 执行插件行为
hook.call('shenmaxg');
