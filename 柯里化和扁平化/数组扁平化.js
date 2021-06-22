
function flattenDeep(arr, deepLength) {
    return arr.flat(deepLength);
}

console.log(flattenDeep([1, [2, [3, [4]], 5]],3));
