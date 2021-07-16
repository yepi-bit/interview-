
// 箭头函数没有prototype(原型)，所以箭头函数本身没有this
// 使用new调用箭头函数都会报错，因为箭头函数没有constructor
class B{}
    B.prototype.a = 1;
    B.prototype.add=()=>{
            this.a++
    };
    const b1 =new B()
    console.log(b1.a)
    const b2 = new B();
    b2.add();
    console.log(b2.a); // 箭头函数没有自己this指向，或上一层去找
const obj = {
    a:1,
};
obj.add = () => {
    console.log(this.a);
}
obj.add();

// 箭头函数不绑定arguments，取而代之用rest参数...rest代替arguments对象，来访问箭头函数的参数列表

// 普通函数
function A(a){
    console.log(arguments);
}
A(1,2,3,4,5,8);

// 箭头函数和普通函数
let C = (...c) => {
    console.log(c);
}
C(3,82,32,11323);

let a = (first, ...abc) => {
    console.log(first, abc); // 1 [2, 3, 4]
};
a(1, 2, 3, 4);
// 箭头函数不能用作Generator函数，不能使用yield关键字

