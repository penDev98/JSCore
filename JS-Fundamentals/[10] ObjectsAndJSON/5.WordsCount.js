function countWordsInAText(string) {
    let words = string.toString().split(/[^0-9a-zA-Z_]+/).filter(word => word != "");

    let wordsCount = {};

    for (let word of words) {
        wordsCount[word] ? wordsCount[word]++ :wordsCount[word] = 1;
    }

    return JSON.stringify(wordsCount);
}