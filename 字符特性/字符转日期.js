
var str = "20210518183723"
var data_str = str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,'$1年$2月$3日$4：$5：$6')
console.log(data_str);
