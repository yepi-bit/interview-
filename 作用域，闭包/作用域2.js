
function f1(a) {
    console.log(a);
    var a = 2
    console.log(a);
    function a() {}

    console.log(a);
}
f1()



let foo = function() { console.log(1) };
(function foo() {
    foo = 10  // 由于foo在函数中只为可读 没有声明函数作用域var，因此赋值无效
    console.log(foo)
}())
