
var containsDuplicate = function(nums) {
    const set = new Set();
    for (const x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }
    return false;
};
// 复杂度分析
// 时间复杂度：O(N)O(N)，其中 N 为数组的长度。
// 空间复杂度：O(N)O(N)，其中 N 为数组的长度。
console.log(containsDuplicate([1, 2, 4, 1]));


var containsDuplicate2 = function(nums) {
    return nums.length !== Array.from(new Set(nums)).length;
};
console.log(containsDuplicate2([1, 2, 4, 1]));


// Sort 排序后找相邻两位相同数字
var containsDuplicate3 = function(nums) {
    nums.sort((a, b) => a - b);
    for(var i = 1; i < nums.length; i++)
        if (nums[i] === nums[i - 1]) return true
    return false
};
console.log(containsDuplicate3([1, 2, 4, 1]));


// 枚举 双指针，i每次固定1位，j从i起，找与i相同数字
var containsDuplicate4 = function(nums) {
    for(var i = 0; i < nums.length - 1; i++)
        for(var j = i + 1; j < nums.length; j++)
            if (nums[i] === nums[j]) return true
    return false
};
console.log(containsDuplicate4([1, 2, 4, 1]));
