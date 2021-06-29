// JS中的基本数据类型6中：Number、Undefined、Null、Boolean、String、 Symbol 。
// 其中JS数字运算时存在精度缺失问题。其主要原因是因为在计算机中，无论是定点数还是浮点数都是以多位二进制的方式进行存储和运算的。

console.log(0.1 + 0.2 !== 0.3); // true
// 2、解决方法

// ES6提供的Number.EPSILON方法
function numbersequal(a, b) {
    return Math.abs(a - b) < Number.EPSILON
}
// Math.abs(x) 函数返回指定数字 “x“ 的绝对值。EPSILON 属性的值接近于 2-52。
var a = 0.1 + 0.2, b = 0.3;
console.log(numbersequal(a,b)); //true

// 把计算数字提升 10的N次方倍再除以 10的N次方。N>1
console.log((0.1 * 1000 + 0.2 * 1000) / 1000 === 0.3);
//true
