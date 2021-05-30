// 类的继承
class Animal{
    constructor(){
        this.name = 'animal';
    }
    getName(){
        return this.name
    }
}

class Cat extends Animal{
    constructor(){
        super()
        this.name = 'cat';
    }
}


let animal  = new Animal();
let cat     = new Cat();
console.log(animal.getName())
console.log(cat.getName())

