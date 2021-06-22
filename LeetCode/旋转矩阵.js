// 方法1
var rotate = function(matrix) {
    const n = matrix.length
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
        matrix[i] = matrix[i].reverse()
    }
    return matrix
};
console.table(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


// 方式2   中间水平对换， 反对角线两两交换
var rotate2 = function(matrix) {
    let arr = [...matrix]
    for(let i = 0; i < arr.length; i++){  //如下 i=0时 00->01->02； i=1时 10->11->12；
        let list = []
        for(let j = 0; j < arr[0].length ; j++) {
            list.push(arr[j][i])    // 横排变列排
        }
        matrix[i] = list.reverse()  // 竖直左右交换
    }
    return matrix
};
console.table(rotate2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
