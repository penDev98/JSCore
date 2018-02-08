function uniqueSequences(input) {
    let uniqueSequences = new Map();

    for (let i = 0; i < input.length; i++) {
        let current = input[i]
            .split(/[\[\], ]/)
            .filter(e => e !== '')
            .map(Number)
            .sort((a, b) => b - a);

        let areTheSame = false;

        for (let [arr, val] of uniqueSequences) {
            areTheSame = compare(current, arr);

            if (areTheSame) {
                break;
            }
        }

        if (!areTheSame) {
            uniqueSequences.set(current, 0);
        }
    }

    let sorted = [...uniqueSequences];
    sorted.sort((a, b) => a[0].length - b[0].length);

    for (let [sequence, b] of sorted) {
        console.log(`[${sequence.join(', ')}]`)
    }

    function compare(arr1, arr2) {
        return arr1.length === arr2.length && arr1.reduce((a, b) => a && arr2.includes(b), true)
    }
}