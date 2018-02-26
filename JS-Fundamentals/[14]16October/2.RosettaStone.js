function solve(input) {
    let templateLines = Number(input[0]);
    let template = [];
    for (var i = 1; i <= templateLines; i++) {
        var obj = input[i];
        template.push(obj.split(" ").map(Number));
    }
    let encoded = [];
    for (var i = templateLines + 1; i < input.length; i++) {
        let obj = input[i];
        encoded.push(obj.split(" ").map(Number));
    }
    let limit = encoded.length - templateLines;
    if (encoded.length % templateLines !== 0) {
        limit += encoded.length % templateLines;
    }
    for (var i = 0; i < limit; i += templateLines) {
        for (var j = 0; j < encoded[i].length; j += templateLines) {
            for (var k = 0; k < template.length; k++) {
                for (var l = 0; l < template[k].length; l++) {
                    if (typeof encoded[i + k] !== Object) {
                        break; }
                         else {
                        encoded[i + k][j + l] += template[k][l];
                        if (typeof encoded[i + k][j + l] !== Number) {
                            break;
                        }

                        // encoded[i+k][j+l] %= 27;
                        // if(encoded[i+k][j+l] === 0){
                        //     encoded[i+k][j+l] = " ";
                        // }

                    }
                }
            }
        }
    }
    console.log(encoded)
}
solve([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]);