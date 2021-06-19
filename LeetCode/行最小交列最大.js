var luckyNumbers  = function(matrix) {
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        const min = Math.min(...matrix[i]);
        const index = matrix[i].indexOf(min);
        const arr = [];
        for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][index])
        }
        if (Math.max(...arr) == min) {
            res.push(min)
        }
    }
    return res;
}

// 方法2
/*var luckyNumbers  = function(matrix) {
    let mins=matrix.map(row=>Math.min(...row));
    let maxs=matrix[0].map((item,col_index)=>Math.max(...matrix.map(row=>row[col_index])));
    return maxs.filter(item=>mins.includes(item))
};*/


console.log(luckyNumbers([[1, 2, 3], [4, 5, 6], [7,8,9]]));
