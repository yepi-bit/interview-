var A = {'1':'aa','2':'bb','3':'cc',length: 4};
var a = Array.from(A);
console.log(a);

var b = [].slice.apply(A);
console.log(b);

// var c = [...A];
// console.log(c);

var d = [].map.call(A, o => o);
console.log(d);

