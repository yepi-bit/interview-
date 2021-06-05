//返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。
// 如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。

function testAwait (x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

async function helloAsync() {
    var y = await testAwait ("hello world");
    console.log(y);
}
helloAsync ();
// hello world
