
// 哈希遍历，分别用Object 数组 Map标记数字已出现过。找再出现数字
var containsDuplicate = function(nums) {
    var h = Object.create(null)
    for(var i = 0; i < nums.length; i++)
        if (h[nums[i]]) return true
        else h[nums[i]] = 1
    return false
};
console.log(containsDuplicate([1, 2, 4, 1]));

// 数组索引
var containsDuplicate2 = function(nums) {
    var h = []
    for(var i = 0; i < nums.length; i++)
        if (h[nums[i]]) return true
        else h[nums[i]] = 1
    return false
};
console.log(containsDuplicate2([1, 2, 4, 1]));


// Map
var containsDuplicate3 = function(nums) {
    var h = new Map
    for(var i = 0; i < nums.length; i++)
        if (h.has(nums[i])) return true
        else h.set(nums[i], 1)
    return false
};
console.log(containsDuplicate3([1, 2, 4, 1]));
