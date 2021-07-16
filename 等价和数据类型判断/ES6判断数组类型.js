console.log(Array.isArray([])); // => true
console.log(Array.isArray({0: 'a', length: 1})); // => false
if (!Array.isArray){
    Array.isArray = function(arg){
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
