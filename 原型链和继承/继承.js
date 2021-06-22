function Person(name, age) {
    this.name = name
    this.age = age
    this.gender = '男'
}

Person.prototype.nation = '汉'

Person.prototype.say = function() {
    console.log(`It is ${this.name} - ${this.age}`)
}

var person = new Person('Mr Wang', 22)

console.log(person.name)
console.log(person.age)
console.log(person.gender)
console.log(person.nation)
person.say()


function Parent() {
    this.name = ['A', 'B']
}

function Child() {
    Parent.call(this)  // 可以通过什么方式实现访问到构造函数里面的属性呢？答案是call或apply
}

var hello = new Child()
console.log(hello.name) // ['A', 'B']

hello.name.push('C')
console.log(hello.name) // ['A', 'B', 'C']
