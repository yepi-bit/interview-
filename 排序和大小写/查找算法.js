
// 顺序查找 简而言之，就是从第一个元素开始，遍历全部元素，也叫暴力查找。
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if  (arr[i] === target) {
            return i
        }
    }
    return -1
}
console.log(search([9, 4, 1, 2, 3, 5, 6], 1));

