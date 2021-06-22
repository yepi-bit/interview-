
var a = 10;
var obj = {
    a: 20,
    say: () => {
        console.log(this.a)
    }
}
obj.say(); // 10
var anotherObj = { a: 30 };
obj.say.apply(anotherObj); // 10

