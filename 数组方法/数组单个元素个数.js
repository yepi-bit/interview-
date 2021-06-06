// 方法1 filter
function count(arr, item) {
    var count = arr.filter(function (a) {
        return a === item;
    });
    return count.length;
}
console.log(count([1, 2, 2, 3, 5, 5, 5],5));


// 方法2 map
function counts(arr, item) {
    var count = 0;
    arr.map(function (a) {
        if(a === item) {
            count++;
        }
    });
    return  count;
}
console.log(counts([1, 1, 2, 2, 2, 2, 3], 2));

// 方法3 reduce
function counts2(arr, item) {
    var count = arr.reduce(function (prev, curr) {
        return curr === item ? prev + 1 : prev;
    },0);
    return count
}
console.log(counts2([1, 1, 1, 1, 1, 2, 2, 3], 1));
