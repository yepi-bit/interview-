async function async1(){
    console.log('async1 start');
    await async2();
    console.log('async1 end');  //  B  微任务
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');  // A   宏任务
},0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');   // C  微任务
});
console.log('script end');
