function quicksort(arr) {
    if (arr.length <= 1)
        return arr;
    let arrLength = arr.length >> 1;  // arrLength取 3 2 1
    let first = arr.splice(arrLength, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= first)  {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(first, quicksort(right));
}

console.log(quicksort([4,3,5,2,1,6]));   //  [1, 2, 3, 4, 5, 6]
