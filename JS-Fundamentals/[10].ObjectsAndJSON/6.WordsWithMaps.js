function countWordsWithMaps(string) {
    let words = string.toString().toLowerCase().split(/[^0-9a-zA-Z_]/).filter(word => word !== "");

    let wordsCount = new Map();

    for (let word of words) {
        wordsCount.has(word) ? wordsCount.set(word, wordsCount.get(word)+1) : wordsCount.set(word, 1);
    }

    let allWords = Array.from(wordsCount.keys()).sort();

    allWords.forEach(word => console.log(`'${word}' -> ${wordsCount.get(word)} times`));
}