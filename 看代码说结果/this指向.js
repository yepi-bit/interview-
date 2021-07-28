
var obj = {
    a: 1,
    func: function() {
        console.log(this.a);
    },
    func2: function() {
        var f = this.func;
        f();
    }
};
obj.func(); // 1
obj.func2(); // 2
var func = obj.func;
func(); // 3
