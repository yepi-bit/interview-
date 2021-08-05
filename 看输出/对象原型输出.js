var A = {
    n: 1
};
var B = function () {
    this.n = 2
};
var C = function () {
    var n = 3
};

B.prototype = A;
C.prototype = A;
var b = new B();
var c = new C();
A.n++;
console.log(b.n);
console.log(c.n);
