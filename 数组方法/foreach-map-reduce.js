
// forEach
var a = [1,2,3];
    a.forEach(function (i) {
    console.log(i);
})


var arr = ['1','2']
var newArray = arr.map(function (arr) {
    return arr;
});
console.log(newArray);


var result = [1,1,1,1,1,1,10]
var total = result.reduce(function (countedValue, wallet) {
    return countedValue + wallet;
}, 0);
console.log(total);


var isArr = [1,2,9,101]
var filterNewArr = isArr.filter(function (wallet) {
    return wallet > 100;
});
console.log(filterNewArr);
