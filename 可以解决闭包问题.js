
var arr = [];
for(var i = 0; i < 3; i++){
    arr[i] = function(){
        console.log(i);
    };
};
arr[1]();//3    let  打印1

