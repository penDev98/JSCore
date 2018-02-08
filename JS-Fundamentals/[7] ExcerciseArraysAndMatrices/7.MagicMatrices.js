function magicMatrices(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentSumHorizontally = matrix[row].reduce((a, b) => a + b, 0);

            if(currentSumHorizontally !== sum || verticalSum(matrix) !== sum) {
                isMagic = false;
                return false;
            }
        }
    }

    return isMagic;

    function verticalSum(matrix) {
        let sum = (r, a) => r.map((b, i) => a[i] + b);

        return matrix.reduce(sum).reduce(function(a, b){ return (a === b) ? a : NaN; });
    }
}