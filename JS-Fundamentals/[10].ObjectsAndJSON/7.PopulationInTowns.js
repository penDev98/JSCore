function populationInTowns(arr) {
    let register = new Map();

    for (let town of arr) {
        let tokens = town.split(/\s*<->\s*/).filter(x => x !== "");

        let townName = tokens[0];
        let population = Number(tokens[1]);

        register.has(townName) ? register.set(townName, register.get(townName) + population) : register.set(townName, population);
    }

    register.forEach((population, town) => console.log(`${town} : ${population}`));
}