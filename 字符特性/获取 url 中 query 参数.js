
let str = "https://juejin.cn?name=zhangsan&age=18&id=123";
function getUrlParams(str) {
    let obj = [];
        let temp = str.split("=");
        obj.push(temp);
        return obj
}
console.log(getUrlParams(str));
