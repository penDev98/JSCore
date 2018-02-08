function wordOccurrences(sentence, word) {
    word = "\\b" + word + "\\b";

    let regex = new RegExp(word, "gi");

    let matches = sentence.match(regex);

    if(matches) {
        return matches.length
    }

    return 0;
}