
function deepClone(source){
    const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
    for(let keys in source){ // 遍历目标
        if(source.hasOwnProperty(keys)){
            if(source[keys] && typeof source[keys] === 'object'){ // 如果值是对象，就递归一下
                targetObj[keys] = source[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepClone(source[keys]);
            }else{ // 如果不是，就直接赋值
                targetObj[keys] = source[keys];
            }
        }
    }
    return targetObj;
}

const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
const cloneObj = deepClone(originObj);
console.log(cloneObj === originObj); // false
// 修改值用来判断
cloneObj.a = 'abc';
console.log(cloneObj);
console.log(originObj);
