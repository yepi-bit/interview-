// 函数是否通过 call,apply 调用，或者使用了 bind 绑定，如果是，那么this绑定的就是指定的对象【归结为显式绑定】。
function info() {
    console.log(this.age);
}
var person = {
    age: 20,
    info
}
var age = 22;
person.info()  // 执行的是隐式绑定
var info = person.info;
info.call(person);
info.apply(person);
info.bind(person)();
