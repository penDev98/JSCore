function subtract(){
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);
    let subt = num1 - num2;
    document.getElementById("result").innerHTML = subt;
}