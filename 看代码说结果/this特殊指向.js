
var length = 10;
function fn1() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function () {
        fn1();
        arguments[0]();
    }
}
obj.method(fn1, 1);  // 10  2  undefined



var b = 10;
function fn() {
    console.log(this.b)
}
c = {
    b: 11,
    fn: fn.bind(this)
}
c.fn()  // 10 undefined
