// 写法1
var arr = [3,4,1,2,5,7];
function sortArray(arr) {
    return arr.sort(function compare(a, b) {
        return a - b;
    })
}
    sortArray(arr)
    console.log(arr);

// 写法 2
var arr1 = [3,4,1,2,5,7,0];
var sortArray = function (arr1) {
    return arr1.sort(function compare(a, b) {
        return a - b;
    })
}
sortArray(arr1)
console.log(arr1);


//  插入排序
var nums = [3,4,1,2,5,7,6]
var sortArray = function(nums) {
    const length = nums.length
    // 需要从1开始
    for(let i = 1; i < length; i++){
        let j = i
        let tempValue = nums[i]  // 获取要比较的值
        while(j > 0 && nums[j - 1] > tempValue){
            nums[j] = nums[j - 1]
            j--
        }
        nums[j] = tempValue
    }
    return nums
};
sortArray(nums)
console.log(nums);
