// 一个数如果恰好等于它的因子之和，这个数就称为“完数”。


function is(num) {
    const a = [];
    for(let i = 1; i < num; i ++) {
        if(num % i === 0) {
            a.push(i);
        }
    }
    let res  = 0;
    a.forEach( val => {
        res += val;
    });
    return res === num;
}
function f1() {
    const res = [];
    for(let i = 1; i <= 1000; i ++) {
        if(is(i)) res.push(i);
    }
    console.log(res)
}
f1();
