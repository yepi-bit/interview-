
// 逆排序
function revStr(str) {
    var tmpStr = '';
    for (var i = str.length-1; i >= 0; i--){
        tmpStr += str.charAt(i);
    }
    return tmpStr;
}
var str = 'abcdefg'
console.log(revStr(str));
