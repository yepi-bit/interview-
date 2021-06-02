// forEach
var arr = [1,3,6,9,12];
arr.forEach(function (currentValue,index,Arr) {
    console.log(index + "---" + currentValue + "---" + (Arr === arr));
})

// map
var arr1 = [1,2,4,6,8];
var arr2 = arr1.map(function (currentValue) {
    return currentValue * currentValue;
});
console.log(arr2); // [ 1, 4, 16, 36, 64 ]

// filter 过滤筛选返回新数组
var arr3 = [1,2,3,4,5];
var result = arr3.filter(function (currentValue) {
    return currentValue > 3;
});
console.log(result); // [ 4, 5 ]

// every() 数组中都满足返回true,  some() 数组只要一项满足就返回true
var arr4 = [1,2,3,4,5];
var result = arr4.every(function (currentValue) {
    return currentValue > 0;
});
console.log(result);
