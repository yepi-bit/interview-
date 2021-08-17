

str = 'window';
function say(){
    console.log(str, this.str)
}

let obj = (function() {
    let str = '1-1';
    return {
        str:'1-2',
        say:function() {
            console.log(str, this.str)
        }
    }
})();

say();// window window
obj.say();// 1-1 1-2
obj.say = say;
obj.say();  // window 1-2
