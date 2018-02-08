function heroicInventory(arr) {
    let heroes = [];

    for (let string of arr) {
        let tokens = string.split(/\s*\/\s*/).filter(x => x !== "");

        let name = tokens[0];
        let level = tokens[1];
        let items = [];

        if(tokens.length > 2) {
            items = tokens[2];
            items = items.split(/\s*[,]+\s*/);
        }

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}