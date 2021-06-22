
function flattenDeep(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // 取出并移除
        const next = stack.pop();
        if(Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
