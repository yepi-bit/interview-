
//  方法1
var arr =[1,2,3,4,5,'哈哈'];
var t;
for(var i = 0; i < arr.length; i++){
    var rand = parseInt(Math.random() * arr.length);
    t = arr[rand];
    arr[rand] =arr[i];
    arr[i] = t;
}
console.log(arr);


// 方法2
var arr1 =[1,2,3,4,5];
var brr = [];
var num  = arr1.length;
for (var i = 0; i < num; i++){
    var temp = parseInt(Math.random()*(num-i));
    brr.push(arr1[temp]);
    arr1.splice(temp,1);
}
console.log(brr);
