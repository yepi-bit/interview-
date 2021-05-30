
// 变量和常量
let r = 2;
r = 4;
console.log(r);

// const 不能重复定义 块级
const pi = 3.1415926;
// pi = 10;
console.log(pi);

// 不能重复定义
var foo = 1;
var foo = 2;
console.log(foo);

// let 不能重复定义 块级
let bar = 1;
// let bar = 2;
console.log(bar);

// 块级作用域
if(true){
    var test = 1;
}
console.log(test);

// 外部 用 let const 不行 放作用域里面可以
if(true){
    let test1 = 2;
    console.log(test1);
}
// console.log(test1);

// 块级作用域2
let arr = [1, 2, 3, 4];
for(var i = 0; i < arr.length; i++){
    // console.log(i);   // 打印 0,1,2,3  用let 也是打印 0,1,2,3
    // do nothing
}
console.log(i);   // 打印4  用let 不行


// 不存在变量提升
console.log(fooo);
var fooo = 2;

var f1;
console.log(f1)
f1=1;

// console.log(bar1);
// let bar1 = 1;    // 用let 报错
