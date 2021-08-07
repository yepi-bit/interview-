

window.name = 'ByteDance';
function A () {
    this.name = 123;
}
A.prototype.getA = function(){
    console.log(this);  
    return this.name + 11;
}
var a = new A();  // window
var funcA = a.getA;
funcA();  // ByteDance11
