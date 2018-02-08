function operation(input) {
    let numbers = [];
    for (let i = 0; i < input.length; i++) {
        let item = input[i];
        if(typeof item === 'number'){
            numbers.push(item);
        }
        else{
            if(numbers.length > 1){
                let num1 = numbers.pop();
                let num2 = numbers.pop();
                switch(item){
                    case '+': numbers.push(num2 + num1); break;
                    case '-': numbers.push(num2 - num1); break;
                    case '*': numbers.push(num2 * num1); break;
                    case '/': numbers.push(num2 / num1); break;
                }
            }
            else{
                console.log("Error: not enough operands!");
                return;
            }
        }
    }
    if(numbers.length > 1){
        console.log("Error: too many operands!");
    }
    else console.log(numbers[0]);
}