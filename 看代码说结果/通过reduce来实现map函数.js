let arr = [1, 2, 3, 4]

Array.prototype.map2 = function (fn) {
    let result = [];
    this.reduce((prev, cur) => {
        result.push(fn(cur))
    }, arr[0]);
    return result
}

let arr2 = arr.map2(function(item) {
    return item * 2
})

console.log(arr2);
