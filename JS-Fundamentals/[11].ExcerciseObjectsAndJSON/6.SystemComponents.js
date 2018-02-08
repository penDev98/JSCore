function systemComponents(arr) {

    let system = new Map();

    for (let string of arr) {
        let [systemName, componentName, subcomponentName] = string.split(" | ");

        if(!system.has(systemName)) {
            system.set(systemName, new Map());
        }

        if(!system.get(systemName).has(componentName)) {
            system.get(systemName).set(componentName, []);
        }

        system.get(systemName).get(componentName).push(subcomponentName);
    }

    let systemArr = [...system];
    systemArr = sortSystem(systemArr);

    for (let [systemName, values] of systemArr) {
        console.log(systemName);

        let componentNames = [...values];
        componentNames = sortComponents(componentNames);

        for (let [componentName, subcomponentNames] of componentNames) {
            console.log(`|||${componentName}`);

            for (let subcomponentName of subcomponentNames) {
                console.log(`||||||${subcomponentName}`);
            }
        }
    }

    function sortSystem(arr) {
        arr.sort(function (a, b) {
            return [...a[1]].length !== [...b[1]].length ? [...b[1]].length - [...a[1]].length : b[0].toLowerCase() < a[0].toLowerCase()
        });

        return arr;
    }

    function sortComponents(arr) {
        arr.sort(function (a, b) {
            return [...b[1]].length - [...a[1]].length
        });

        return arr;
    }
}