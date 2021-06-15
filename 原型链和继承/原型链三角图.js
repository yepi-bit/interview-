// 构造函数
function Person(name, age) {
    this.name = name
    this.age = age
}
// 添加到原型上的方法
Person.prototype.sayHi = function () {
    console.log('hello world');
}
let p1 = new Person('Man',18)
let p2 = new Person('Women',16)
console.log(p1.sayHi === p2.sayHi);
console.log(p1.sayHi());
console.log(p1.age);
console.log(p1.name);
console.log(p1.__proto__);
console.log(Person.prototype);
console.log(Person.prototype.constructor);
