// var a = isNaN(NaN);
// var b = isNaN(undefined);
// console.log(a === b);
// console.log(a);
// console.log(b);
// var c = NaN === NaN;
// console.log(c);

// var mergeTo = [4,5,6,];
// var mergeFrom = [7,8,9];
// Array.prototype.push.apply(mergeTo,mergeFrom);
// console.log(mergeTo);
// console.log(mergeFrom);

// function test() {
//     var x = 'abc';
//     var result = [];
//     result.push(x);
//     try {
//         throw'';
//     }catch (x) {
//         x = 'error';
//     }
//     result.push(x);
//     return result;
// }
// var a = test()
// console.log(a);

var a = [1,2,3,4];
a = a.forEach((item)=>{
    item = 2;
});
console.log(a);
