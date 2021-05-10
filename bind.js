
// bind

Function.prototype.mybind =  function (txt, ...args) {
    let self = this;
    return function () {
        return self.apply(txt, args);
    }
}

// test
let a = {name: 'Mr wang'}
let text = function () {
    console.log(this.name);
}
let res = text.mybind(a);
res();