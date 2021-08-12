
var findMedianSortedArrays = function(nums1, nums2) {
    let num = nums1.concat(nums2);
    num = num.sort((a,b) => a - b);
    let length = num.length;
    if (length > 0 && length % 2 === 0) {
        return (num[length / 2 - 1] + num[length / 2]) / 2;
    } else {
        return num[(length - 1) / 2];
    }
};
let aa = findMedianSortedArrays([1,2,3],[4,5]);
console.log(aa);
