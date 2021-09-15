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

function beget(obj) {
    function F() {}
    F.prototype = obj; //继承了传入的参数
    return new F(); //返回函数对象
}

var son = new Father();



// 将原型式继承的核心代码套一个壳子
function getSubObject(obj) {
    var clone = beget(obj); // 核心
    return clone;
}

var son1 = getSubObject(new Father());
console.log(son1);
// 重点：
//
// 就是给原型式继承外面套了个壳子。
// 优点：
//
// 没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
//
// 缺点：
//
// 没用到原型，无法复用。
