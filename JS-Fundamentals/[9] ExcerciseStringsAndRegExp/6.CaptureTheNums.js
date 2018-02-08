function captureNumbers(arr) {
    let result = [];

    for (let string of arr) {
        let matches = string.match(/\d+/g);

        if(matches) {
            result.push(matches);
        }
    }

    return result.join(" ").split(",").join(" ");
}