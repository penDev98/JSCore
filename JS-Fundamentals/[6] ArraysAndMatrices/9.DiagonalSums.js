function diagonalSums(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    let count = 0;
    let count2 = matrix[0].length - 1;
    for(i = 0; i < matrix.length; i++){
        sum1 += matrix[i][count];
        count++;
    }
    for(i = 0; i < matrix.length; i++){
        sum2 += matrix[i][count2];
        count2--;
    }
    console.log(sum1, sum2);
}