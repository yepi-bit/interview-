// apply

Function.prototype.myapply= function (txt, args) {
    txt.fn = this;
    let res;
    if(!args){
        res = txt.fn();
    }else {
        res = txt.fn(...args)
    }
    return res;
}
let obj = {
    name: 'jack',
    height: '181'
}
function test(arg1, arg2, arg3){
    console.log(this.name);
    console.log(arg1, arg2, arg3);
}

test.myapply(obj, [1, 2, 3])