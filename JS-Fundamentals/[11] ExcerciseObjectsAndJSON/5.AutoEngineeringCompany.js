function autoEngineeringCompany(arr) {

    let company = {};

    for (let string of arr) {
        let [brand, model, producedCars] = string.split(" | ");

        if(!company.hasOwnProperty(brand)) {
            company[brand] = {};
        }

        if(!company[brand].hasOwnProperty(model)) {
            company[brand][model] = 0;
        }

        company[brand][model] += Number(producedCars);
    }

    for (let brand in company) {
        console.log(brand);

        for (let model in company[brand]) {
            console.log(`###${model} -> ${company[brand][model]}`);
        }
    }
}