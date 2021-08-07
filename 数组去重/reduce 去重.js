
function uniq(arry) {
    return arry.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

console.log(uniq([1, 2, 3, 3, 4, 4, 5]));
