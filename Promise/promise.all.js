// 方式1
Promise.all = (promise) =>{
    let count = 0;
    let list = [];
    let len = promise.length;
    return new Promise((resolve, reject)=>{
        promise.forEach((p)=>{
            p.then(
                (res)=> {
                    count++;
                    list.push(res);
                    if (count === len) {
                        resolve(list);
                    }
                    (err) => {
                        reject(err);
                    }
          }
        );
        });
    });
}
// 方式2
// const promise1 = Promise.resolve(1);
// const promise2 = 18;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
// });
//
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// // expected output: Array [3, 42, "foo"]


// // 方式3  Promise.all 的异步性
// var resolvedPromisesArray = [Promise.resolve(20), Promise.resolve(28)];
// var p = Promise.all(resolvedPromisesArray);
// // 立即记录p的值
// console.log(p);
//
// // 使用setTimeout，我们可以在堆栈为空后执行代码
// setTimeout(function(){
//     console.log('堆栈现在是空的');
//     console.log(p);
// });

