function oddPositionsDoubled(arr) {
    let arr2 = [];
    let startIndex = 0;
    if((arr.length - 1) % 2 === 1){
        startIndex = arr.length - 1;
    }
    else if((arr.length - 2) % 2 === 1){
        startIndex = arr.length - 2;
    }
    for(let i = startIndex; i > 0; i-=2){
        arr2.push(arr[i] * 2);
    }
    console.log(arr2.join(' '));
}