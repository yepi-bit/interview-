
var arr = [1,2,3,4];
console.log(arr.join()); // 1,2,3,4
console.log(arr.join(':')); // 1:2:3:4
console.log(arr.push("TOM")); // 返回长度 5
console.log(arr);            // [ 1, 2, 3, 4, 'TOM' ]
console.log(arr.pop());      // 返回最后一个元素 TOM
console.log(arr.shift());    // 删除第一个元素 并返回 1
console.log(arr);            // [ 2, 3, 4 ]
console.log(arr.unshift("Mr"));  // 返回长度 4
console.log(arr);            // [ 'Mr', 2, 3, 4 ]

var arr1 = ["小王","小李","小陈","小吴"];
console.log(arr1.splice(2, 1));  // 返回 被删元素 小陈
console.log(arr1.splice(2, 0));  // 没有删除 返回空
console.log(arr1.splice(1, 1, "小马哥")); // 返回被换的元素 [ '小李' ]
console.log(arr1);           // [ '小王', '小马哥', '小吴' ]
console.log(arr1.splice(1, 2, "我是替换者"));  // 替换多个返回 [ '小马哥', '小吴' ]
console.log(arr1);   // [ '小王', '我是替换者' ]

// slice数组截取，不看下标, 返回新数组
var arr2 = [1,3,5,7,9];
console.log(arr2.slice(1)); //  [ 3, 5, 7, 9 ]
console.log(arr2.slice(0,4)); // 不包含头包尾 [ 1, 3, 5, 7 ]
console.log(arr2.slice(1, -2)); // [ 3, 5 ]
console.log(arr2.slice(-5, 4)); // 包头包尾 [ 1, 3, 5, 7 ]
console.log(arr2.slice(-4, -1));  // 包头不包围 [ 3, 5, 7 ]

// 返回 下标值
var arr3 = [1,2,3,4,5]
console.log(arr3.indexOf(3));  // 2
console.log(arr3.indexOf(4,1)); // 从括号1里的指定下标1第一次出现开始往后找 有字符4就返回下标值，没有返回-1
