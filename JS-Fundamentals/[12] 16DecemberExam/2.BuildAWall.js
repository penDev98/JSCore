function solve(arr) {

    for (let item of arr) {
        item = parseInt(item);
    }
    let result = [];
    while(true){
        let currentDay = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                currentDay += 195;
                arr[i]++;
            }
        }
        if(currentDay === 0){
            break;
        }
        result.push(currentDay);
    }
    let sum = 0;
    for (let item of result) {
        sum += item;
    }
    console.log(result.join(", "));
    console.log(sum* 1900 + " pesos");
}