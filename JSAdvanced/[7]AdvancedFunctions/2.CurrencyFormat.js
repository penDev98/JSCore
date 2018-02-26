function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let formatter = getDollarFormatter(formatCurrency)(1000)
console.log(formatter)

function getDollarFormatter(outer){
    function dollarFormatter(value) {
        return outer(',', '$', true, value);
    };
    return dollarFormatter;
}