
var a = 1;
var oA = () => {
    console.log(this.a)
}
obj = {
    a: 10,
    b: function () {
        console.log(this.a);
    }
}
var c = obj.b;
oA();  //undefined 浏览器 1
obj.b(); //10
c();  //undefined   1
