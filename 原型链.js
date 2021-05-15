
var a = function () {
    this.b= 3
}
var c = new a();
a.prototype.b = 9;
var b = 7;
a();
console.log(b);  // 7
console.log(a.prototype.constructor); // [Function: a]
console.log(a.prototype); // { b: 9 }
console.log(c); // a { b: 3 }
console.log(c.b);  // 3
console.log(c.__proto__); // { b: 9 }