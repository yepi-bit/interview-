

function addBigNum(str1, str2){
    let res = '',
        c = 0;
    const str1Arr = str1.split(''),
        str2Arr = str2.split('');
    while(str1Arr.length || str2Arr.length || c){
        const num1 = str1Arr.length ? str1Arr.pop() : 0,
            num2 = str2Arr.length ? str2Arr.pop() : 0;
        c += num1 + num2;
        res = (c % 10) + res;
        c = c > 9;
    }
    return res.replace(/^0+/,'');
}

