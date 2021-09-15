// 创建父类
function Father(name) {
    this.name = name;
    this.arr = [1];
    this.show = function() {
        console.log("shuai");
    }
}
Father.prototype.call = function() {
    console.log("call");
};

function Son(name) {
    Father.call(this, name); // 借用构造函数继承
};

Son.prototype = new Father(); // 原型链继承

var son1 = new Son('li');
var son2 = new Son('zhang');
console.log(son1);
console.log(son2);
// 重点：
//
// 结合了两种模式的优点，传参和复用
//
// 优点：
//
// 可以继承父类上的属性，可以传参，可复用
// 每个新实例引入的构造函数属性是私有的。
// 缺点：
//
// 调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。
