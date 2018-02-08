function extractText(text) {
    let result = [];
    let start = text.indexOf('(');
    while(start > -1){
        let end = text.indexOf(')', start);
        if(end === -1){
            break;
        }
        let snippet = text.substring(start + 1, end);
        result.push(snippet);
        start = text.indexOf('(', end);
    }
    console.log(result.join(', '));
}