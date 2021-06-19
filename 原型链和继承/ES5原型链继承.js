//先来个父类，带些属性
function Super(){
    this.flag = true;
}
//为了提高复用性，方法绑定在父类原型属性上
Super.prototype.getFlag = function(){
    return this.flag;
}
//来个子类
function Sub(){
    this.subFlag = false;
}
//实现继承
Sub.prototype = new Super;
//给子类添加子类特有的方法，注意顺序要在继承之后
Sub.prototype.getSubFlag = function(){
    return this.subFlag;
}
//构造实例
var es5 = new Sub;

console.log(es5.getSubFlag());
console.log(es5.flag);
