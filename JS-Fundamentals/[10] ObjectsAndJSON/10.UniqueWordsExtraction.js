function extractUniqueWords(arr) {
    let uniqueWords = new Set();

    for (let string of arr) {
        let words = string.toLowerCase().split(/\W/).filter(x => x !== "");

        for (let word of words) {
            uniqueWords.add(word);
        }
    }

    return [...uniqueWords].join(", ");
}