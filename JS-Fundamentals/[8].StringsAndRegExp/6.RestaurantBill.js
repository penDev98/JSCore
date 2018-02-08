function restaurantBill(input) {
    let items = [];
    let sum = 0;
    for(let i=0; i<input.length; i+=2){
        items.push(input[i]);
        sum += Number(input[i+1]);
    }
    console.log("You purchased " + items.join(', ') + " for a total sum of " + sum)
}