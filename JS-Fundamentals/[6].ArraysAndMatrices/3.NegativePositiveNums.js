function negativePositive(arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sortedArr.unshift(arr[i]);
        }
        else if (arr[i] >= 0) {
            sortedArr.push(arr[i]);
        }
    }
    sortedArr.forEach((num) =>
        console.log(num));
}