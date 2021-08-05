var F = function () {};
Object.prototype.a = function () {
    console.log('a')
};
Function.prototype.b = function () {
    console.log('b')
};

var f = new F();

f.a();
// f.b();  // 不能new后的变量去调用Function原型
F.a();
F.b();

