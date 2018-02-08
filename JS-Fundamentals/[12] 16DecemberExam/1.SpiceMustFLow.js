function solve(totalSpice) {
        let collectedSpice = 0;
        let days = 0;
    while(totalSpice >= 100){
        days++;
        collectedSpice+= totalSpice;
        totalSpice -= 10;
        if(collectedSpice <= 26){
            collectedSpice = 0;
        }
        else collectedSpice -= 26;
    }
    if(collectedSpice <= 26){
        collectedSpice = 0;
    }
    else{
        collectedSpice -= 26;
    }
    console.log(days);
    console.log(collectedSpice);
}