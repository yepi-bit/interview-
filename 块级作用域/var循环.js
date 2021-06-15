// 方式1 输出五个5
var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs.push(function () {
        console.log(i);
    })
}
funcs.forEach(function (func) {
        func();
})


// 方式2 输出0-4
for (var i =0; i < 5; i++) {
    funcs.push(function (value) {
        return function () {
            console.log(value);
        }
    }(i));
}
funcs.forEach(function (func) {
        func();
})

// 方式3 输出 0-4
for (let i =0; i < 5; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function (func) {
    func();
})
