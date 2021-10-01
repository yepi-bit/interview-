
function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (!result.includes(arry[i])) {
            result.push(arry[i])
        }
    }
    return result;
}
console.log(uniq([1, 1, 2, 2, 3, 3, 3]));
