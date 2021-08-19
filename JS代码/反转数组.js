
//反转数组
function turnArray(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
var arr = [1,23,7,3,4,5,6,7,8,9];
console.log(turnArray(arr));
