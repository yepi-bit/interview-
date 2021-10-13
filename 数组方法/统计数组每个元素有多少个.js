// 去重后的个数
var expectNumber = function(scores) {
    return new Set(scores).size
}
console.log(expectNumber([1,2,3,3,2,4,5,'哈哈']));

// 方法1
var arr = [1,1,1,2,2,3];
function getWordCnt(){
    var obj = {};
    for(var i= 0, l = arr.length; i < l; i++){
        var item = arr[i];
        obj[item] = (obj[item] + 1 ) || 1;
    }
    return obj;
}
console.log(getWordCnt());



// 方法2 用 reduce
var arr1 = ["apple","orange","apple","orange","pear","orange"];
function getWordCnt1(){
    return arr1.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}
console.log(getWordCnt1());


// 方法3
const d = {};
let ary = ['赵', '钱', '孙', '孙', '李', '周', '李', '周', '李'];
ary.forEach(k => !d[k] ? d[k] = 1 : d[k]++);
const max = Object.keys(d).sort((a, b) => d[b] - d[a])[0];
console.log(max)
