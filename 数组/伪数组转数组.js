// ES6 方法
function test(){
    var arg = Array.from(arguments);
    arg.push(5);
    console.log(arg);//1,2,3,4,5

}

console.log(test(1, 2, 3, 4));

 // ES5方法： Array.prototype.slice.call()
