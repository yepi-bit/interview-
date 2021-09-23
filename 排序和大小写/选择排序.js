
var nums = [2,4,6,1,3,9];
var sortArray = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i; j < nums.length; j++){
            if(nums[i] > nums[j]){
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums
};
sortArray(nums);
console.log(nums);
