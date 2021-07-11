
// 顺序indexOf
var containsDuplicate = function(nums) {
    for(var i = 0; i < nums.length; i++)
        if (nums.indexOf(nums[i]) !== i) return true
    return false
};
console.log(containsDuplicate([1, 2, 4, 1]));


// 高阶函数every
var containsDuplicate2 = function(nums) {
    return !nums.every((v, i, a) => a.indexOf(v) === i)
};
console.log(containsDuplicate2([1, 2, 4, 1]));


// 高阶函数some
var containsDuplicate3 = function(nums) {
    return nums.some((v, i, a) => a.indexOf(v) !== i)
};
console.log(containsDuplicate3([1, 2, 4, 1]));


//Set
var containsDuplicate4 = function(nums) {
    return new Set(nums).size !== nums.length
};
console.log(containsDuplicate4([1, 2, 4, 1]));
