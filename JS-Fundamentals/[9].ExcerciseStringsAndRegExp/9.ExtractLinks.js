function extractLinks(arr) {
    let regex = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;

    for (let string of arr) {
        let matches = string.match(regex);

        if(matches) {
            console.log(matches.join("\n"));
        }
    }
}