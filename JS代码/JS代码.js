
function instanceOf(left,right) {//left 表示左表达式，right 表示右表达式

    let proto = left.__proto__;
    let prototype = right.prototype
    while(true) {
        if(proto === null) return false
        // 这里重点：当 prototype 严格等于 proto 时，返回 true\
        if(proto === prototype) return true
        proto = proto.__proto__;
    }
}

// 开始测试
var a = []
var b = {}

function Foo(){}
var c = new Foo()

function child(){}
function father(){}
child.prototype = new father()
var d = new child()

console.log(instanceOf(a, Array)) // true
console.log(instanceOf(b, Object)) // true
console.log(instanceOf(b, Array)) // false
console.log(instanceOf(a, Object)) // true
console.log(instanceOf(c, Foo)) // true
console.log(instanceOf(d, child)) // true
console.log(instanceOf(d, father)) // true
