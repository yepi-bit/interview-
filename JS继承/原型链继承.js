// 创建要继承的父类
function Father() {
    // 自带的属性和方法
    this.name = "li";
    this.show = function() {
        console.log("帅");
    }
};

// 在父类的原型上添加方法
Father.prototype.callback = function() {
    console.log(this.name);
}

// 定义Son
function Son() {

}

// 令Son继承Father
Son.prototype = new Father();// 这句是原型链继承的重点

// 创建Son的对象实例
var son = new Son();
var son1 = new Son();

console.log(son.name); // 可以调用继承于父类上的属性
son.show(); //  可以调用继承于父类上的方法
son1.callback(); // 可以调用father中原型上添加的方法
// 重点：
//
// 让新实例的原型等于父类的实例。
//
// 优点：
//
// 简单，易于实现
//
// 缺点：
//
// 原型对象的引用属性是所有实例共享的。
