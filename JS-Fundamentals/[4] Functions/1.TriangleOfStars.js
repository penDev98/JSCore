function triangleOfStars(size) {
    function printStars(size) {
        console.log("*".repeat(size - i))
    }
    for (i = size - 1; i >= 1; i--){
        printStars(size)
    }
    console.log("*".repeat(size));

    for (i = 1; i <= size - 1; i++){
        printStars(size)
    }
}