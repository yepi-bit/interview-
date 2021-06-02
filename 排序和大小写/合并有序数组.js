
function merge2(arr1, arr2) {
    var res = [...arr1, ...arr2]
    return res.sort((a, b) => {
        return a - b
    })
}
var arr = merge2([1,7,3],[5,6,0])
console.log(arr);
