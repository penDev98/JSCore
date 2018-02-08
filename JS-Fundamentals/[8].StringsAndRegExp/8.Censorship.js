function cencorship(str, arr) {
    for(let word of arr) {
        let replaced = '-'.repeat(word.length);
        while (str.indexOf(word) > -1){
            str = str.replace(word, replaced);
        }
    }
    console.log(str);
}