
function A() {};

var a = new A();

console.log(a instanceof A);
console.log(a instanceof Function);
console.log(a instanceof Object);



var name = '123';
function B() {
    var name = 'abc'
    function b() {
        console.log(name);
    }
    b();
}

console.log(name);
B();
