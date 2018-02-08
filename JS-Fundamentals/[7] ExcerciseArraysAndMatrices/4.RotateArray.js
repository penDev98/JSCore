function rotateArray(arr) {
    let iterator = parseInt(arr[arr.length-1]);
    arr.pop();
    for(let i = 0; i<iterator%arr.length;i++){
        arr.unshift(arr[arr.length-1]);
        arr.pop();
    }
    console.log(arr.join(' '));
}