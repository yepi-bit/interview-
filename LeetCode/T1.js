// 开平方 方法1
var mySqrt = function(x) {

    if(x < 0) return NaN;
    if(x == 0) return 0;

    let min = 1;
    let max = x;
    while(max - min > 1){
        let mid = Math.ceil((max + min)/2);
        if (mid*mid < x ) {
            min = mid;
        } else if (mid*mid > x) {
            max = mid;
        } else {
            return mid
        }
    };
    return min;
}
mySqrt(4)
console.log(mySqrt(8));
// 方法2

var mySqrt1 = function(x) {
    while(x>=0){
        return (Math.sqrt(x)|0);
    }
};
console.log(mySqrt1(4));
