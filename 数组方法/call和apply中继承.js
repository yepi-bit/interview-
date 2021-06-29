function Animal(name,weight){
    this.name = name;
    this.weight = weight;
}

function Cat(){
    // 在call中将this作为thisArgs参数传递
    // Animal方法中的this就指向了Cat中的this
    // 所以Animal中的this指向的就是cat对象
    // 在Animal中定义了name和weight属性，就相当于在cat中定义了这些属性
    // cat对象便拥有了Animal中定义的属性，从而达到了继承的目的
    Animal.call(this,'cat','30');
    // Animal.apply(this,['cat','30']);
    this.say = function(){
        console.log("我是 " + this.name + ", 体重是 " + this.weight);
    }
}
//当通过new运算符产生了cat时，Cat中的this就指向了cat对象
var cat = new Cat();
cat.say();
//输出=> I am cat,my weight is 50
