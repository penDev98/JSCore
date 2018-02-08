function cappyJuice(arr) {
    let cappy = new Map();

    let result = new Map;

    for (let juice of arr) {
        let [juiceType, quantity] = juice.split(" => ");

        cappy.has(juiceType) ? cappy.set(juiceType, cappy.get(juiceType) + Number(quantity)) : cappy.set(juiceType, Number(quantity));

        let bottles = 0;

        if(cappy.get(juiceType) >= 1000) {
            bottles = Math.floor(cappy.get(juiceType) / 1000);

            cappy.set(juiceType, cappy.get(juiceType) % 1000);
        }

        if(bottles > 0) {
            result.has(juiceType) ? result.set(juiceType, result.get(juiceType) + bottles) : result.set(juiceType, bottles);
        }
    }

    result.forEach((bottles , juiceType) => console.log(`${juiceType} => ${bottles}`));
}