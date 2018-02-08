function lowestPricesInCities(arr) {
    let result = new Map();

    for (let string of arr) {
        let [town, product, price] = string.split(/\s*\|\s*/).filter(x => x !== "");

        if (!result.has(product)) {
            result.set(product, new Map());
        }

        result.get(product).set(town, Number(price));
    }

    for (let [product, towns] of result) {
        let lowestPrice = Number.MAX_VALUE;
        let townWithLowestPrice = "";

        for (let [town, price] of towns) {
            if(price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}