// 创建父类
function Father(name) {
    this.name = name;
    this.arr = [1];
    this.show = function() {
        console.log("shuai");
    }
}

// 给父类的prototype上添加共有属性
Father.prototype.call = function() {
    console.log("call");
};

function Son() {
    Father.call(this); //1. 先继承父类上的可变属性
}

// 精髓函数important
function beget(obj) {
    function F() {}
    F.prototype = obj; //继承了传入的参数
    return new F(); //返回函数对象
}

var bet = beget(Father.prototype); // 继承了父类函数的原型

Son.prototype = bet; //继承了get的实例；返回了一个空的具有Father prototype上属性的对象实例

bet.constructor = Son; // 修复实例，形成闭环 实际：bet.__proto__.constructor = Son;

var son1 = new Son(); // Sub的实例就继承了构造函数的属性，父类实例，
console.log(son1.call);
//
// 寄生：
//
// 在函数内返回对象然后调用
//
// 组合：
//
// 1、函数的原型等于另一个实例。
//
// 2、在函数中用apply或者call引入另一个构造函数，可传参

// 重点：修复了组合继承的问题
