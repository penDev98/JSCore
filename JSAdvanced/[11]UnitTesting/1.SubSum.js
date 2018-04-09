function subsum(arr, start, end){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end > arr.length){
        end = arr.length - 1;
    }
    let sum = 0;
    for (var i = start; i <= end; i++) {
        if(end === 0){
            return 0;
        }
        sum+= Number(arr[i]);
    }
    return sum;
}

console.log(subsum([], 0, 0));