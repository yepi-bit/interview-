let p1 = Promise.resolve(10);
let p2 = new Promise(function (resolve,reject) {
        resolve(20);
});
let p3 = new Promise(function (resolve,reject) {
        resolve(30);
});
let p4 = Promise.race([p1,p2,p3]);
p4.then(function (value) {
    console.log(value);  // p1 已经处于完成状态
})
