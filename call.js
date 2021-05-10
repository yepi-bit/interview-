// call

Function.prototype.mycall = function (txt, ...rest) {
    txt.fn = this
    var result = txt.fn(...rest)
    delete txt.fn;
    return result;
}

// test
let obj = {
    name: 'Mr wang'
}
function test(arg1, arg2, arg3) {
    console.log(this.name);
    console.log(arg1, arg2, arg3);
}
test.mycall(obj, 1, 2, 3)