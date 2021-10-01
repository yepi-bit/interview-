
function uniq(arry) {
    return arry.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

console.log(uniq([1, 2, 3, 3, 4, 4, 5]));



let arr = [1, 2, 3, 3, 4, 4];
let newArr = arr.reduce((acc, n, i) => {
    console.log(acc,n);
    return [].concat(acc, arr.indexOf(n) === i ? n : [])
});
console.log(newArr);
