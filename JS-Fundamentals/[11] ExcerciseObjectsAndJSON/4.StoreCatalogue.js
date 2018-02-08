function storeCatalog(arr) {
    let catalog = {};

    for (let string of arr) {
        let [name, price] = string.split(" : ");

        catalog[name] = Number(price);
    }

    let names = Object.keys(catalog).sort();

    let letters = new Set();

    for (let product of names) {
        let currentLetter = product[0];

        if(!letters.has(currentLetter)) {
            console.log(currentLetter);
        }

        letters.add(currentLetter);

        console.log(`  ${product}: ${catalog[product]}`);
    }
}