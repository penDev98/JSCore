function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    for(let i=0; i < matrix.length;i++){
        for(let j=0; j < matrix[i].length; j++){
            if(matrix[i][j] > biggestNum){
                biggestNum = matrix[i][j];
            }
        }
    }
    console.log(biggestNum);
}