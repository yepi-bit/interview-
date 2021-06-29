// 方法1
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return [];
}
console.log(twoSum([1,2,3,4,5,6], 9)); // 返回下标值

// 方法2
var twoSum2 = (nums,target)=>{
    for(let i = 0;i < nums.length; i++){
        let test = nums.lastIndexOf(target - nums[i]);
        if(test !== -1 && test !== i) {
            return [i,test]
        }
    }
}
console.log(twoSum2([3,3], 6)); // 返回下标值

