// 创建父类
function Father(name) {
    this.name = name;
    this.arr = [1];
    this.show = function() {
        console.log("帅");
    }
}
Father.prototype.call = function() {
    console.log("call");
};
// 创建子类
function Son(name) {
    // 借父类的构造函数来增强子类实例，等于是把父类的实例属性复制了一份给子类实例装上了（完全没有用到原型）
    Father.call(this, name); // 核心代码
}
var son1 = new Son("n1");
var son2 = new Son("n2");

son1.arr.push(2); // 向son1的数组中添加一个数

console.log(son1);
console.log(son2);

// 这时son实例的prototype的原型是object
console.log(son1.show === son2.show); // false
// 重点：
//
// 用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
//
// 优点：
//
// 只继承了父类构造函数的属性，没有继承父类原型的属性
// 解决了原型链继承的缺点
// 可以继承多个构造函数的属性（利用call()）
// 在子实例中可向父实例传参。

// 缺点：
//
// 只能继承父类构造函数的属性
// 无法实现构造函数的复用（每次使用时都要重新调用）
// 每个新实例都有父类构造函数的副本，臃肿
