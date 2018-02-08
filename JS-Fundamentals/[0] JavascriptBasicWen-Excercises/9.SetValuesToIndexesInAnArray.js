function arrIndexes(input) {
    let size = Number(input[0]);
    let arr = [];
    for (let i=0 ; i<size; i++) {
        arr[i] = 0;
    }

    for (let i=1; i<input.length; i++) {
        let line = input[i].split(" - ");
        arr[Number(line[0])] = Number(line[1]);
    }
    for (let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}
console.log(arrIndexes(["3",
    "0 - 5",
    "1 - 6",
    "2 - 7"]));