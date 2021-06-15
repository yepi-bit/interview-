
// js
var obj = { a: 100, b: 200 }
for (var i in obj) {
    console.log(i) // a  b
}
console.log(i)  // b

// es6
const obj1 = { a: 10, b: 20 }
for (let n in obj1) {
    console.log(n) // a  b
}
// console.log(n)  // undefined

// ES6
const name = 'stephen'
const age = 18
const html = `My name is <b>${name}</b> , I'm ${age} years old.`

console.log(html)


// js
var arr = [1, 2, 3]
var newArr = arr.map(function (item) {
    return item + 1
})
console.log(newArr);


// 箭头函数
const arr1 = [1, 2, 3, 4]
var newArr1 = arr1.map(item => item + 1)
var newArr2 = arr1.map((item, index) => {
    console.log(index)
    return item + 1
})
console.log(newArr1);
console.log(newArr2);
