function solve(input) {
    input = input.map(Number);
    let maxValue = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        let currentValue = -1;
        if (current >= 0 && current < 10) {
            for (let j = i + 1; j <= i + current; j++) {
                let item = input[j];
                if(currentValue === -1)
                { currentValue = item}
                else {currentValue *= item};
            }

                maxValue.push(currentValue);

        }
    }
    let maxValue2 = maxValue[0];
    for (let obj of maxValue) {
        if (obj > maxValue2){
            maxValue2 = obj;
        }
    }
    console.log(maxValue2);
}
solve([9,
    5652,
    5652,
    9190,
    4172,
    494,
    536,
    9510,
    1584,
    0,
    1,
    10,
    6,
    0,
    675,
    8913,
    1891,
    4298,
    269,
    3754,
    6459
]);