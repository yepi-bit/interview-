// 等价
var foo = function () {
    return 1;
};

let foo1 = () => 1


let nums = [1,2,5,10,12,15];
let newArray = [];
nums.forEach(v => {
    if(v % 5 == 0) {
        newArray.push(v);
    }
});
console.log(newArray);
