function Super(){
    this.flag = true;
}
Super.prototype.getFlag = function(){
    return this.flag;     //继承方法
}
function Sub(){
    this.subFlag = false;
    Super.call(this)    //继承属性
}

// 少下面两行代码就是构造函数继承
Sub.prototype = new Super;   //  会导致Sub.prototype的constructor指向Super; 加上Sub.prototype.constructor = Sub;
// new Super 改为 Super.prototype  是 寄生式组合继承 -> 为了解决构造函数被执行两次的问题, 我们将指向父类实例改为指向父类原型, 减去一次构造函数的执行
Sub.prototype.constructor = Sub;

var obj = new Sub();
Super.prototype.getSubFlag = function(){
    return this.flag;
}
var x = new Sub()

console.log(x.flag);
console.log(x.subFlag);
console.log(x.getFlag());
console.log(x.getSubFlag());
