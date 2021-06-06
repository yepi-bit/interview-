let obj = { a: '1',b: '2',c: '3' };
for (let o in obj) {
    // console.log(o);  // a,b,c
    console.log(obj[o]);
}

let arr = ['1','2','3','4'];
for (let o of arr) {
    console.log(o);
}

