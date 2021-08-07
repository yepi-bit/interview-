const myMap = new Map();
let my = {
    name: 'aaa',
    sex: '呵呵'
};
myMap.set(my, 'info');
console.log(myMap);


const myMap2 = new WeakMap();
let my2 = {
    name: 'bbb',
    sex: '哈哈'
};
myMap2.set(my2, 'info');
console.log(myMap2);
