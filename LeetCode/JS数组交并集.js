let arr1=[1,2,3,4,5,6]
let arr2=[4,5,6,7,8,9]
// 并集 数组去重
let RemoveSame = [...new Set([...arr1, ...arr2])];
console.log(RemoveSame);

//数组交集，或得两个数组重复的元素
let SamePart = arr1.filter(item => arr2.includes(item));
console.log(SamePart);
