
var func1 = x => x;
var func2 = x => {x};
var func3 = x => ({x});
var func4 = x => (x);

console.log(func1(1));
console.log(func2(1));
console.log(func3(1));
console.log(func4(1));


// 箭头函数
let value = 3;
let double = x => 2 * x;
let treble = x => {
    return 3 * x;
}
console.log('double:', double(value));
console.log('treble:', treble(value));

// 没有独立作用域
var obj = {
    commonFn : function(){
        console.log(this);
    },
    arrowFn : () => {
        console.log(this);
    }
}
obj.commonFn();// this 指向obj作用域
obj.arrowFn(); // this 指向了obj所在作用域，全局window

// 不能用做构造函数
// let Animal = function(){
//
// }
// let animal = new Animal();
//
// let Animal2 = () => {
//
// }
// let animal = new Animal2();

// 没有prototype
var commonFn = function(){};
var arrowFn  = () => {};

console.log(commonFn.prototype);  // 打印 {}
console.log(arrowFn.prototype);   // 打印 undefined

