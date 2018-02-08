function capitalize(input) {
    let words = input.split(" ");
    let result = [];
    for(let word of words){
        word = word[0].toUpperCase() + word.substr(1, word.length).toLowerCase();
        result.push(word);
    }
    console.log(result.join(" "));
}