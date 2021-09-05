
function largestSum(arr) {
    if (!arr) return null;
    const len = arr.length;
    if (!len) return Number.MIN_SAFE_INTEGER;
    let sum = arr[0];
    let res = sum;
    for (let i = 1; i < len; i++) {
        if (sum < 0) sum = arr[i];
        else sum = sum + arr[i];
        res = Math.max(res, sum);
    }
    return res;
}

console.log(largestSum([1,2,4,5,-1,1]));
