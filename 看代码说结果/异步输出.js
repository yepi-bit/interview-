
setTimeout(() => {
    console.log(1);
    },
    0
);
console.log(2);
new Promise(res => {
    res(console.log(3));
    console.log(4);
}).then(() => {
    console.log(5);
});
(async () => console.log(6))();
