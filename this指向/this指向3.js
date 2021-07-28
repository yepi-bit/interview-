
fn.apply(null,{length:3});
function fn(){
    console.log(this);   // window
    console.log(arguments);  // [undefined,undefined,undefined,...] 伪数组
}
