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
// 生育函数
function beget(obj) {
    function F() {}
    F.prototype = obj; //继承了传入的参数
    return new F(); //返回函数对象
}

var son1 = new Father(); // 先拿到父类的对象
console.log(son1);

// （核心代码）
var son2 = beget(son1); // 将父类中的属性赋值到每一个子类的函数的原型中
var son3 = beget(son1); // 同上

son2.name = "zhang"; // 修改实例中的属性

console.log(son2);
console.log(son3);
console.log(son2.call); //子类的实例都可以访问父类的原型上的属性和方法
// 重点：
//
// 用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。(每创建一个对象实例都会返回一个新的函数)、
//
// 优点：
//
// 复制一个对象，用函数来包装。
//
// 缺点：
//
// 所有实例都会继承原型上的属性。
// 无法实现复用。
