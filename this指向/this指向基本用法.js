
// 普通函数调用，此时 this 指向 window
function fn() {
    console.log(this)
}
fn(); // window


// 构造函数调用， 此时 this 指向 实例对象
function Person(age, name) {
    this.age = age;
    this.name = name
    console.log(this)  // 此处 this 分别指向 Person 的实例对象 p1
}
var p1 = new Person(18, 'zs')
console.log(p1);


// 对象方法调用， 此时 this 指向 该方法所属的对象
var obj = {
    fn2: function () {
        console.log(this); // obj
    }
}
obj.fn2();


// 定时器函数， 此时 this 指向 window
setInterval(function () {
    console.log(this); // window
}, 1000);


// 通过事件绑定的方法， 此时 this 指向 绑定事件的对象
// <body>
// <button id="btn">hh</button>
//     <script>
    // var oBtn = document.getElementById("btn");
    // oBtn.onclick = function() {
    //         console.log(this); // btn
    //     }
//    </script>
// </body>
