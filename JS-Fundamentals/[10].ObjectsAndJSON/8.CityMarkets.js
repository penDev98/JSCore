function cityMarkets(arr) {
    let result = new Map();

    for (let string of arr) {
        let [town, product, sales] = string.split(/\s*->\s*/).filter(x => x !== "");

        sales = sales.split(" : ").map(Number).reduce((a, b) => a * b);

        if(!result.has(town)) {
            result.set(town, new Map());
        }

        if(!result.get(town).has(product)) {
            result.get(town).set(product, 0);
        }

        let previousSales = result.get(town).get(product);

        result.get(town).set(product, previousSales + sales);
    }

    for (let [town, values] of result) {
        console.log(`Town - ${town}`);

        for (let [product, income] of values) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}