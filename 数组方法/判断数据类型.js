
console.log(typeof (1));   // number
console.log(typeof ("1")); // string
console.log(typeof (true)); // boolean
console.log(typeof (undefined)); // undefined
console.log(typeof (null)); // object
console.log(typeof (symbol)); // undefined
console.log(typeof (NaN)); // number

var obj = {};
console.log(obj instanceof Object);  // true

var arr = [];
console.log(arr instanceof Array);   // true

var now = new Date();
console.log(now instanceof Date);    // true

var func = function () {};
console.log(func instanceof Function);  // true

var str = 'string';
console.log(str instanceof String);  // false
