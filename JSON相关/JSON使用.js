
var txt = {"firstName":"John", "lastName":"Doe"};
console.log(txt);
var json = JSON.stringify(txt)
console.log(json);
var json1 = JSON.parse(json)  // 使用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象:
console.log(json1);

