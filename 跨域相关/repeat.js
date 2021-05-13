

function repeat(func, times, wait) {
    return function () {
        let args = arguments;
        let handle = function (i) {
            setTimeout(() =>{
                func.apply(null, args);
            }, wait * i);
        };
        for (let i = 0; i < times; i++){
            handle(i);
        }

    }
}
repeat(console.log("hhhh"), 3, 2000)


