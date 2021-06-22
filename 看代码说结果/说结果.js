
// 我们知道 console.log(a) 肯定返回 {? : 3}，这个 ? 处首先应该是一个字符串类型；
// ? 处其实需要将 b 转化为字符串，即 ({}).toString()，由于 b 是对象，应该返回 [object type]，而这里 type 是 Object，所以最终返回 { '[object Object]': 3 }
var a = {};
var b = {}
a[b] = 3;
console.log(a); // { '[object Object]': 3 }

console.log([1, 2, 3].map(parseInt));
