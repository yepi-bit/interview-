
var arr = [1,2,3,4,5,6];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i], i, arr);
// }
arr.forEach(function (item,index,array) {
    console.log(item, index, array);
})
