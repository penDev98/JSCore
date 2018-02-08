function PrintLineUntilStop(input) {
    for(let i = 0; i < input.length; i++)
    {
        if (input[i] === "Stop")
        {
            break;
        }
        console.log(input[i])
    }
}
console.log(PrintLineUntilStop(["3",
"6",
"5",
"4",
"Stop"
]));