
// 方法1
var findDuplicate = function(nums) {
    for(var i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) !== i){
            return nums[i];
        }
    }
};
console.log(findDuplicate([3,1,3,4,2,4,5,5]));

// 方法2
var findDuplicate2 = function (nums) {
    var allRepetition = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                allRepetition.push(nums[i])
            }
        }
    }
    return allRepetition
};
console.log(findDuplicate2([3,1,3,4,2,4,5,5]))

// 方法3
var findDuplicate3 = function(nums) {
    for(let i = 0;i < nums.length;i++){
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
};
console.log(findDuplicate3([3,1,3,4,2,4,5,5]));

// 方法4
var findDuplicate4 = function(nums) {
    let map = {};
    for (let i=0;i<nums.length;i++){
        if(map[nums[i]] !== undefined){
            return nums[i]
        }else{
            map[nums[i]]=nums[i]
        }
    }
};
console.log(findDuplicate4([3,1,3,4,2,4,5,5]));
