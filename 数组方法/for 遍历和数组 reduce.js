// 方法1
const files = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
let filePaths = [];

for (let file of files) {
    const fileName = file.trim();
    if(fileName) {
        const filePath = `~/cool_app/${fileName}`;
        filePaths.push(filePath);
    }
}
console.log(filePaths);

// 方法2
const files1 = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths1 = files1.reduce((acc, file) => {
    const fileName = file.trim();
    if(fileName) {
        const filePath = `~/cool_app/${fileName}`;
        acc.push(filePath);
    }
    return acc;
}, []);

console.log(filePaths1);

// 方法3
const files2 = [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
const filePaths2 = files2
    .map(file => file.trim())
    .filter(Boolean)
    .map(fileName => `~/cool_app/${fileName}`);
console.log(filePaths2);
