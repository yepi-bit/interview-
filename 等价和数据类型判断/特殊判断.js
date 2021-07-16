var str1 = 'abc';
var str2 = String('abc');
console.log(str1);
console.log(str2);
console.log(str1 === str2); // true

var str3 = new String('abc')
console.log(str3);
console.log(str2 === str3); // false
