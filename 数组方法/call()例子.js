
var a = {
    name:'王城', //定义a的属性
    say:function(){ //定义a的方法
        console.log("Hi,I'm 函数 a!");
    }
};
function b(name){
    console.log("Post 参数: "+ name);
    console.log("I'm "+ this.name);
    this.say();
}

b.call(a,'test'); // 传递一个对象，函数中的this指向这个对象
