var a = [];
//以下类型为迷惑
// var a = {
//     __proto__: Array.prototype
// };

// 1.基于instanceof
console.log(a instanceof Array);
// 2.基于constructor
console.log(a.constructor === Array);
// 3.基于Object.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(a));
// 4.基于getPrototypeOf
console.log(Object.getPrototypeOf(a) === Array.prototype);
// 5.基于Object.prototype.toString
console.log(Object.prototype.toString.apply(a) === '[object Array]');

// 以上，除了Object.prototype.toString外，其它方法都不能正确判断变量的类型。
