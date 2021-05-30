var arr = ['javaScript', 'book', '前端语言编程', '5月30日'];

function arrToObjAdapter(arr) {
    return {
        name: arr[0],
        type: arr[1],
        title: arr[2],
        data: arr[3]
    }
}
var adapterData = arrToObjAdapter(arr)
console.log(adapterData);
