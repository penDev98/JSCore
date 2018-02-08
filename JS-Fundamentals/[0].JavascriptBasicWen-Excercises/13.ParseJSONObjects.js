function ParseJSON(input) {
    for(let i = 0; i < input.length; i++)
    {
        let obj = JSON.parse(input[i]);
        console.log(obj.Name)
    }

}

