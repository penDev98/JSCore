function addRemove(input) {
    let output = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] === "add"){
            output.push(i+1);
        }
        else if(input[i] === "remove"){
            output.splice(output.length-1, 1)
        }
    }
    if (output.length === 0){
        console.log("Empty");
    }
    else
    for(let i = 0; i < output.length; i++) {
        console.log(output[i]);
    }

}