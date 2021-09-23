// var arr = ['green','red','orange','pink'];
// // 迭代， 映射，便利
// arr.filter(function (value) {
//     if (value === 'red') {
//         console.log('哈哈哈');
//         // return true;
//     }
//     console.log('嘻嘻嘻');
// })
// ES5
// Object.defineProperty()
var obj = {
    id: 1,
    name: '小米',
    price: 988
};
//
// console.log(obj);
// obj.num = 1000;
// obj.price = 999;
// console.log(obj);
Object.defineProperty(obj, 'num',{
    value: 1000
});
Object.defineProperty(obj, 'price',{
    value: 9.9
});
console.log(obj);
