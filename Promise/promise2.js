
function log(msg, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, time);
    });
}

console.log(log("哈哈哈哈",'1000'))

