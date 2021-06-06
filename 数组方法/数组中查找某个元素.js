// 方法1 indexOf
var arr = [1,3,5,7,9]
console.log(arr.indexOf(2));  // 不存在返回-1
console.log(arr.indexOf(5));  // 存在返回下标值

// 方法2 find
var result = arr.find(function(element) {
    return element > 7;
});
console.log(result); // 返回数组中满足条件的第一个元素的值，不存在则返回undefined

// 方法3 findIndex
var array = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
    return element > 13;
}
console.log(array.findIndex(isLargeNumber));
