
var cuttingRope = function (n) {
    if (n <= 3) return n - 1
    var times = Math.floor(n / 3) // 有几个3
    var over = n % 3 // 次数
    if(over == 0) return Math.pow(3, times)
    if(over == 1) return Math.pow(3, times - 1) * 4
    return Math.pow(3, times) * 2
};
var mix = cuttingRope(10);
console.log(mix);
//
// 输入: 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
