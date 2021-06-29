// 方法1
var maxProfit = function(prices) {
    // 最低点
    let minprice = Number.MAX_VALUE
    // 收益
    let maxprofit = 0
    for(let i = 0; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice) // 第i天之前的最低股票价格
        maxprofit = Math.max(maxprofit, prices[i]-minprice) // 第i天时股票可以获取的最大利润
    }
    return maxprofit
};
console.log(maxProfit([5, 1, 3, 7, 2]));

// 方法2
var maxProfit2 = function (prices) {
    if (prices.length === 0) {
        return 0;
    }
    let minPrice = Number.MAX_SAFE_INTEGER;
    // 最大利润
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        // 判断当前是否是最低价格点
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            // 当前值比最低点大，重新计算是否是最大利润
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
console.log(maxProfit2([5, 1, 3, 7, 2]));
