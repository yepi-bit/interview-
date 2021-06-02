// 1.
let a ={},
    b = '0'
    c = 0
a[b] = 'Mr'
a[c] = 'lady'
console.log(a[b]); // 属性名不能重复，数字属性名==字符串属性名 覆盖了

// 2.
let a1 = {},
    b1 = {
        n : '1'
    },
    c1 = {
        m : '2'
    };
a1[b1] = 'Mr';
a1[c1] = 'lady';
console.log(a1[b1]); // 引用类型值转换成字符串
