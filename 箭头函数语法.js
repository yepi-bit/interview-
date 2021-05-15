

var func1 = x => x;
var func2 = x => {x};
var func3 = x => ({x});
var func4 = x => (x);

console.log(func1(1));
console.log(func2(1));
console.log(func3(1));
console.log(func4(1));

