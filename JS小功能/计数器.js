function record () {
    let count = 0;
    const add = () => {
        count++;
        console.log(count);
    };
    const reset = () => {
        count = 0;
    };
    return {
        add,
        reset
    }
}

function start() {
    setTimeout(() => {
        record()
    },1000);
}
const result = start();
console.log(result);
