function firstLast(arr) {
    let k = arr[0]
    let firstK = [];
    let secondK = [];
    for(let i =1; i<=k;i++){
        firstK.push(arr[i]);
    }
    for(let i=arr.length-k; i<arr.length; i++){
        secondK.push(arr[i]);
    }
    console.log(firstK.join(' '));
    console.log(secondK.join(' '));
}