
// 顺序遍历查找 简而言之，就是从第一个元素开始，遍历全部元素，也叫暴力查找。
function search(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if  (arr[i] === target) {
            return i
        }
    }
    return -1
}
console.log(search([9, 4, 1, 2, 3, 5, 6], 1));

// 双指针查找
const doubleSearch = (arr, target) => {
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if (arr[i] === target) {
            return i;
        } else if (arr[j] === target) {
            return j;
        }
    }
    return -1;
}

console.log(doubleSearch([1, 3, 2, 5, 4, 7, 6], 5));


// 二分查找
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        }
    }

    return -1;
};
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 1));
console.log(binarySearch([0, 1, 2, 3, 4, 5], 0));
