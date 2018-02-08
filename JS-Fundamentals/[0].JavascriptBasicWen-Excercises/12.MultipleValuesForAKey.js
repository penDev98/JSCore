function MultipleValues(input) {
    let obj = [];
    let key = input[input.length-1]
    for(let i = 0; i < input.length - 1; i++)
    {
        let line = input[i].split(' ');
        if(line[0] === key)
        {
            obj.push(line[1])
        }
    }
    if (obj.length < 1)
    {
        console.log("None");
    }
    else
    for (let i of obj) {
        console.log(i)
    }
}
