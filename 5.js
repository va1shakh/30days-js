function arrayFilter(arr, fn){
    let filteredArr = [];
    let newIndex = 0;
    for(i=0; i<arr.length; i++){
        if(fn(arr[i])){
            filteredArr[newIndex] = arr[i];
            newIndex ++;
        }
    }
    return filteredArr;
}
const result = arrayFilter([0,10,20,30], (n) => {
    return n > 10;
});
console.log(result);
//filtering array without array.filter() method