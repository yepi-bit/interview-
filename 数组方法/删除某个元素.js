var arr = ['a','b','c','d'];
delete arr[1];
console.log(arr);
//["a", undefined × 1, "c", "d"] 中间出现两个逗号，数组长度不变，有一项为undefined
