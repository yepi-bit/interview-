function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!');
        return;
    }
    arr = arr.sort();
    var array = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            array.push(arr[i]);
        }
    }
    return array;
}
var arr = [1,1,2,2,3,3,5];
console.log(unique(arr));
