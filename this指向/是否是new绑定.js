// 构造函数返回值不是 function 或 object。new Super() 返回的是 this 对象.
function Super(age) {
    this.age = age;

}
let instance = new Super('22');
console.log(instance.age);


// 构造函数返回值是 function 或 object，new Super()返回的是Super()返回的对象。
function Super2(age) {
    this.age = age;
    let obj = {a: '2'};
    return obj

}
let instance2 = new Super2('hello');
console.log(instance2);
console.log(instance2.age);
