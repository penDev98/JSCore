function evenPositions(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i += 2) {
        arr2.push(arr[i]);
    }
    console.log(arr2.join(' '));
}