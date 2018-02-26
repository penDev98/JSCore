function addItem(){
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;
    let option = new Option;
    option.textContent = itemText;
    option.value = itemValue;

    document.getElementById("menu").appendChild(option);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}