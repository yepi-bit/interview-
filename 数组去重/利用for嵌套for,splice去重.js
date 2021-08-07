function unique(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

var arr = [1,1,2,2,3,3,4,4,5];
console.log(unique(arr));
