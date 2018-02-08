function StoringObjects(input) {

    for(let i = 0; i < input.length; i++)
    {

        let line = input[i].split(" -> ")
        let obj = {
            Name: line[0],
            Age: line[1],
            Grade: line[2]
        };

        console.log("Name: " + obj.Name)
        console.log("Age: " + obj.Age)
        console.log("Grade: " + obj.Grade)
    }
}
console.log(StoringObjects(["Pesho -> 13 -> 6.00",
    "Ivan -> 12 -> 5.57",
    "Toni -> 13 -> 4.90"]))