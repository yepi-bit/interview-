
function Parent() {
    this.a = []
}

Parent.prototype.b = [];

let child1 = new Parent();
child1.a.push(1);
child1.b.push(2);

let child2 = new Parent();
console.log(child2.a);
console.log(child2.b);
