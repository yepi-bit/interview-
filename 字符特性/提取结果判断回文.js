// 提前数字 [ '2017', '05', '15', '09', '10', '23' ]
let str = '2017-05-15T09:10:23 Europe/Paris';
let arr = str.match(  /\d{1,}/g);
console.log(arr);
//match会返回一个数组，
// \d 查找数字
// {1,} 表示至少重复几次
// /g表示全局搜索


// 判断是否是回文
var plalindrome = function(x) {
    if (x < 0) {
        return false;
    } else {
        var strNum = String(x);
        if (strNum.split('').reverse().join('') === strNum) {
            return true;
        }
        return false;
    }
};

console.log(plalindrome('abccba'));



