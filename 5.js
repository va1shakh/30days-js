function arrayFilter(arr, fn){
    let filteredArr = [];
    for(i=0; i<arr.length; i++){
        filteredArr[i] = fn(arr[i], i); //instead of array.push
    }
    return filteredArr;
}
const result = arrayFilter([0,10,20,30], (n) => {
    return n > 10;
});
console.log(result);
//filtering array without array.filter() method