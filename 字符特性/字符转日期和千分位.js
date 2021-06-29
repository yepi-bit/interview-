
var str = "20210518183723"
var data_str = str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,'$1年$2月$3日$4：$5：$6')
console.log(data_str);

// 零宽断言
console.info( str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
    return s+','
}) )

// 利用字符串和数组方法
console.info( str.split("").reverse().join("").replace(/(\d{3})+?/g,function(s){
    return s+",";
}).replace(/,$/,"").split("").reverse().join("") )

// 方法3
function parseToMoney(str){
    // 仅仅对位置进行匹配
    let re = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(re,',');
}

console.log(parseToMoney('112312312312'));
