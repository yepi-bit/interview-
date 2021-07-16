// es5
// for (var i = 0; i < 3; i++) {
//     (function (j) {
//         setTimeout(function() {
//             console.log(new Date, j);
//         }, 1000 * j);
//     })(i);
// }
// setTimeout(function() {
//     console.log(new Date, i);
// }, 1000 * i);

// es6
// const tasks = [];
// const output = (i) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(new Date, i);
//         resolve();
//     }, 1000 * i);
// });
//
// for (var i = 0; i < 3; i++) {
//     tasks.push(output(i));
// }
// //最后的i的值是在异步全部完成之后
// Promise.all(tasks).then(() => {
//     setTimeout(() => {
//         console.log(new Date, i);
//     }, 1000);
// });

// es7
const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});

(async () => {
    for (var i = 0; i < 3; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(new Date, i);
    }
//循环完成之后
    await sleep(1000);
    console.log(new Date, i);
})();
