
var tmp = 'hello';
function f(){
    console.log(tmp);
    if(false){
        var tmp = 'hello world';
    }
}
f();
