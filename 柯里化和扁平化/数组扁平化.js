
function flattenDeep(arr, deepLength) {
    return arr.flat(deepLength);
}

console.log(flattenDeep([1, [2, [3, [4]], 5]],3));

// 方法2
function flat(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    };
    return arr;
};
console.log(flat([1, [2, [3, [4]], 5]],3));
