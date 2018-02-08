function treasureLocator(input) {
    let output = [];
    for (let i = 0; i < input.length; i += 2) {
        islands(input[i], input[i + 1], output);
    }

    function islands(a, b, output) {
        if (a >= 1 && a <= 3 && b >= 1 && b <= 3) {
            output.push("Tuvalu");
        }
        else
        if (a >= 8 && a <= 9 && b >= 0 && b <= 1) {
            output.push("Tokelau");
        }
        else
        if (a >= 5 && a <= 7 && b >= 3 && b <= 6) {
            output.push("Samoa");
        }
        else
        if (a >= 0 && a <= 2 && b >= 6 && b <= 8) {
            output.push("Tonga");
        }
        else
        if (a >= 4 && a <= 9 && b >= 7 && b <= 8) {
            output.push("Cook");
        }
        else {
            output.push("On the bottom of the ocean");
        }
    }
    output.forEach(function(element) {
        console.log(element);
    });
}