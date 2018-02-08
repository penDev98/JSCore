function everyNthElement(input) {
    let step = parseInt(input[input.length-1]);
    input.pop();
    for(let i=0; i<input.length; i+=step){
        console.log(input[i]);
    }
}