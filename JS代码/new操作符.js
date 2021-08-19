function Person1(name){
    this.name = name;
}
function Person2(name){
    this.name = name;
    return this.name;
}
function Person3(name){
    this.name = name;
    return new String(name);
}
function Person4 (name){
    this.name = name;
    return function () {
    }
}
function Person5(name){
    this.name = name;
    return new Array();
}

const person1 = new Person1("Wang");
console.log(person1); // Person1 {name: "Wang"}

const person2 = new Person2("Wang");
console.log(person2); // Person2 {name: "Wang"}

const person3 = new Person3("Wang");
console.log(person3);  // String {0: "y", 1: "u", 2: "e", 3: "r", length: 4, [[PrimitiveValue]]: "Wang"}

const person4 = new Person4("Wang");
console.log(person4); // function() {}

const person5 = new Person5("Wang");
console.log(person5); // []

// 1.先创建了一个新的空对象
// 2.然后让这个空对象的__proto__指向函数的原型prototype
// 3.将对象作为函数的this传进去，如果return 出来东西是对象的话就直接返回 return 的内容，没有的话就返回创建的这个对象
