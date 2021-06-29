
var a = 10;
function test() {
    console.log(a);
    a = 100;
    console.log(this.a); // this.a === window.a === 10 无调用者，指向全局 （严格模式下undefined）
    console.log(a);
    var a;
    console.log(a);
}
test();


var x = 10;
function f1() {
    var b = 2 * a;   // a 还没有拿到 == 2 * undefined
    var a = 20;
    var c = a + 1;
    console.log(b);
    console.log(c);
}
f1();
