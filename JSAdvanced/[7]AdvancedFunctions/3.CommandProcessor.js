function commandProcessor(arr){
    let text = '';
    for (let command of arr) {
        let currentCommand = command.split(' ');
        switch(currentCommand[0]){
            case 'append':
                text += currentCommand[1];
                break;
            case 'removeStart':
                text = text.slice(Number(currentCommand[1]));
                break;
            case 'removeEnd':
                text = text.slice(0, text.length-Number(currentCommand[1]));
                break;
            case 'print':
                console.log(text);
        }
    }
}
commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);