function PrintInReversedOrder(input) {
    for(let i = input.length - 1; i >= 0; i--)
    {
        console.log(input[i])
    }
}
console.log(PrintInReversedOrder(["3",
    "6",
    "5",
    "4",
    "Stop"
]));