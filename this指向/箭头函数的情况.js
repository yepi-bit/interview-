// 箭头函数没有自己的this，继承外层上下文绑定的this。
let obj = {
    age: 20,
    info: function () {
        return () => {
            console.log(this.age);  // this继承的是外层上下文绑定的this
        }
    }
}
let person = { age: 22};
let info = obj.info();
info();             // 20
let info2 = obj.info.call(person);
info2();            // 22
