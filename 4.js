/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];
    for(let i=0; i<arr.length; i++){
        returnedArray[i] = fn(arr[i], i); //instead of array.push method
    }
    return returnedArray;
}
const result = map([1,2,3], (n) => {
    return n + 1;
})
console.log(result);