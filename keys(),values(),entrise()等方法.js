let arr = ["a","b","c","d"];
for (let i of arr.keys()){
    console.log(i);
}

for (let i of arr.values()){
    console.log(i);
}

for (let i of arr.entries()){
    console.log(i);
}

// 使用不同进制把一个数字转换为字符串：
var arr1 = 10;
console.log(arr1.toString());
console.log(arr1.toString(2));
console.log(arr1.toString(8));
console.log(arr1.toString(16));

// substring
var str="Hello world!"
console.log(str.substring(3));
console.log(str.substring(3, 7));
