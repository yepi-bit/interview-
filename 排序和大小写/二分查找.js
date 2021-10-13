
function binary_search(arr, target) {
    var low = 0,
        high = arr.length - 1;
    while(low <= high){
        var mid = low + ((high - low ) >> 1); // 或者 parseInt((high + low) / 2);  low +（high - low）/ 2
        if(target === arr[mid]){
            return  mid;
        }else if(target > arr[mid]){
            low = mid + 1;
        }else if(target < arr[mid]){
            high = mid -1;
        }else{
            return -1;
        }
    }
};
var arr = [1,2,3,5,23,36,86];
var result = binary_search(arr,36);
console.log(result);


