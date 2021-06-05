console.log("1" == 1);  //返回true。字符串被转换为数字
console.log(true == 1);  //返回true。true被转换为1
console.log(false == 0);  //返回true。false被转换为0
console.log(null == 0);  //返回false
console.log(undefined == 0);  //返回false
console.log(undefined == null);  //返回true
console.log(NaN == "NaN");  //返回false
console.log(NaN == 1);  //返回false
console.log(NaN == NaN);  //返回false
console.log(NaN === NaN);  //返回false
console.log(NaN != NaN);  //返回true

var a = "abc" + "d";
var b = "a" + "bcd";
console.log(a == b);  //返回true

console.log("0" == 0); // true

var a = 1;
var b = 2;
console.log((a > b || a == b) == (a >= b));


// 去前后空字符 和终止符
var s = "    abc def  \\r\\n ";
s = s.trim();
console.log("[" + s + "]");  //[abc def]
console.log(s.length);  //7

console.log(Symbol.for('a') === Symbol.for('a'));
console.log(Symbol('a') === Symbol('a'));
