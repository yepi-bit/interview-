let set = new Set([1,2,2]); // 过滤重复
set.add(5);
set.add("5")
key = {};
set.add(key);
console.log(set.size);
console.log(set.has(5)); // has() 检查是否存在
set.delete(5);
console.log(set.has(5)); // 不存在了
set.clear();                   // 所以元素被清除
console.log(set.has(1));

let set2 = new Set([1,2]);
set2.forEach(function (value,key2,ownerSet) {
    console.log(key2 + "-" + value);
    console.log(ownerSet === set2);
})


let set3 = new WeakSet(), // WeakSet集合只存储对象的弱引用，并且不可以存储原始值；集合中的弱引用如果是对象唯一的引用，则会被回收并释放相应内存。
key3 = {};
set3.add(key3);
console.log(set3.has(key3));
set3.delete(key3);
console.log(set3.has(key3));
// 向add()方法传入非对象参数会导致程序报错，而向has()和delete()方法传入非对象参数则会返回false.
// 集合不可迭代，所以不能被用于for-of循环。
// 集合不暴露任何迭代器(keys()和values()方法)，所以无法通过程序本身来检查其中的内容。
// 集合不支持forEach()方法。
// 集合不支持size属性。
