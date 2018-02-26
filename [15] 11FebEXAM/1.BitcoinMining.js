function one(params) {
    params = params.map(Number);

    const bitCoinPrize = 11949.16;
    const oneGramGold = 67.51;

    let boughtBitcoins = 0;
    let dayOfFirstBuyedBitcoin = new Set();
    let totalMoney = 0;

    for (let index = 1; index <= params.length; index++) {
        if (index % 3 === 0) {
            totalMoney += (Number(params[index-1]) - (Number(params[index-1]) * 0.3) ) * oneGramGold;
        }
        else {
            totalMoney += Number(params[index-1]) * oneGramGold;
        }


        while (totalMoney >= bitCoinPrize) {
            totalMoney -= bitCoinPrize;
            dayOfFirstBuyedBitcoin.add(index);
            boughtBitcoins++;
        }
    }

    if (boughtBitcoins === 0) {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${[...dayOfFirstBuyedBitcoin][0]}`);

        console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
    }
}