
// 不考虑算法复杂度，用递归做：
function sum(arr) {
    var len = arr.length;
    if(len === 0){
        return 0;
    } else if (len === 1){
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}

console.log(sum([1, 2, 3, 4]));
