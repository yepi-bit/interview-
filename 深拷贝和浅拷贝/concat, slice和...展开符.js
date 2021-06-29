// 深拷贝-》 浅拷贝+递归
const originArray = [1,2,3,4,5];
const cloneArray = originArray.concat();

console.log(cloneArray === originArray); // false
cloneArray.push(6); // [1,2,3,4,5,6]
console.log(cloneArray);
console.log(originArray);  // [1,2,3,4,5];


const originArray2 = [1,[1,2,3],{a:1}];
const cloneArray2 = originArray2.concat();
console.log(cloneArray2 === originArray2); // false
cloneArray2[1].push(4);
cloneArray2[2].a = 2;
console.log(cloneArray2);
console.log(originArray2); // [1,[1,2,3,4],{a:2}]

// originArray 中含有数组 [1,2,3] 和对象 {a:1}，如果我们直接修改数组和对象，不会影响 originArray，但是我们修改数组 [1,2,3] 或对象 {a:1} 时，发现 originArray 也发生了变化。
//
// 结论：concat，slice， ...展开符 只是对数组的第一层进行深拷贝


// 一行代码的深拷贝
function cloneJSON(source) {
    return JSON.parse(JSON.stringify(source));
}
