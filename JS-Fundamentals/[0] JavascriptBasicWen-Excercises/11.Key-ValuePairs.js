function KeyValue(input) {
    let dict = [];
    for(let i = 0; i< input.length - 1; i++)
    {
        let line = input[i].split(' ');
        dict[line[0]] = line[1];
    }
        let key = input[input.length-1]
    if (dict[key] === undefined)
    {
        console.log("None")
    }
    else
        console.log(dict[key])

}
console.log(KeyValue(["3 bla",
    "3 alb",
    "2"]));