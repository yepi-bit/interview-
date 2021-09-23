
// arrayObject.splice(index,howmany,item1,.....,itemX)

var heroes=["李白",'蔡文姬','韩信','赵云','甄姬'];
//当只有索引,从当前索引截取到最后
console.log(heroes.splice(1)); // [ "蔡文姬", "韩信", "赵云", "甄姬"]
console.log(heroes);  //['李白']

// 当第二个参数(删除数量)小于0视为0。
var heroes2 = ["李白",'蔡文姬','韩信','赵云','甄姬'];
console.log(heroes2.splice(1,-10)); //[]
console.log(heroes2); // [ "李白", "蔡文姬", "韩信", "赵云", "甄姬"]

// 删除并添加。
var heroes3 = ["李白",'蔡文姬','韩信','赵云','甄姬'];
console.log(heroes3.splice(1,2,'扁鹊','孙膑')); //[ "蔡文姬", "韩信" ]
console.log(heroes3); //[ "李白",  "扁鹊", "孙膑", "赵云", "甄姬"]
