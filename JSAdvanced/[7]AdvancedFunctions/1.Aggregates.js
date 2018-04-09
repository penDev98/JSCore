function wtf(arr) {
    function aggregates(arr, func){
        let result = arr[0];
        for (let element of arr.slice(1)) {
            result = func(result, element)
        }
        return result;
    }
    console.log(aggregates(arr, (a, b) => a+b));
    console.log(aggregates(arr, (a, b) => Math.min(a,b)));
    console.log(aggregates(arr, (a, b) => Math.max(a,b)));
    console.log(aggregates(arr, (a, b) => a * b));
    console.log(aggregates(arr, (a, b) => ('' + a + '' + b)));
}

