let t = setTimeout(()=>{
    console.log(111);
    let t1 = setTimeout(()=>{
        console.log(222);
        let t2 = setTimeout(()=>{
            console.log(333);
        },3000)
    },2000)
},1000);


// 解决答案
new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(111);
            resolve();
        }, 1000);
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(222);
            resolve();
        }, 2000);
    })
}).then(() => {
    setTimeout(() => {
        console.log(333);
    }, 3000);
});
