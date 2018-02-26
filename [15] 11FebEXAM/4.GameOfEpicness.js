function solve(kingdomsObject, battles) {
    let sortedKingdoms = {};

    for (let obj of kingdomsObject) {
        let kingdom = obj['kingdom'];
        let general = obj['general'];
        let armyValue = obj['army'];
        let army = ['army'];
        let wins = ['wins'];
        let losses = ['losses'];
        if (sortedKingdoms.hasOwnProperty(kingdom)) {
            if (sortedKingdoms[kingdom].hasOwnProperty(general)) {
                if (sortedKingdoms[kingdom][general].hasOwnProperty(army)) {
                    sortedKingdoms[kingdom][general][army] += armyValue
                } else {
                    sortedKingdoms[kingdom][general][army] = armyValue
                }
            } else {
                sortedKingdoms[kingdom][general] = {};
                sortedKingdoms[kingdom][general][army] = armyValue
                sortedKingdoms[kingdom][general][wins] = 0;
                sortedKingdoms[kingdom][general][losses] = 0;
            }
        } else {
            sortedKingdoms[kingdom] = {};
            sortedKingdoms[kingdom][general] = {};
            sortedKingdoms[kingdom][general][army] = armyValue
            sortedKingdoms[kingdom][general][wins] = 0;
            sortedKingdoms[kingdom][general][losses] = 0;
        }

    }
    for (let battle of battles) {
        let kingdom1 = battle[0];
        let kingdom2 = battle[2];
        if (kingdom1 === kingdom2) {
            continue;
        }
        let currentArmy1 = sortedKingdoms[battle[0]][battle[1]]['army'];
        let currentArmy2 = sortedKingdoms[battle[2]][battle[3]]['army'];
        if (currentArmy1 > currentArmy2) {
            sortedKingdoms[battle[0]][battle[1]]['army'] = Math.floor(sortedKingdoms[battle[0]][battle[1]]['army'] * 1.1);
            sortedKingdoms[battle[2]][battle[3]]['army'] = Math.floor(sortedKingdoms[battle[2]][battle[3]]['army'] * 0.9);
            sortedKingdoms[battle[0]][battle[1]]['wins'] += 1;
            sortedKingdoms[battle[2]][battle[3]]['losses'] += 1;
        }
        else if (currentArmy2 > currentArmy1) {
            sortedKingdoms[battle[2]][battle[3]]['army'] = Math.floor(sortedKingdoms[battle[2]][battle[3]]['army'] * 1.1);
            sortedKingdoms[battle[0]][battle[1]]['army'] = Math.floor(sortedKingdoms[battle[0]][battle[1]]['army'] * 0.9);
            sortedKingdoms[battle[0]][battle[1]]['losses'] += 1;
            sortedKingdoms[battle[2]][battle[3]]['wins'] += 1;
        }
        else break;
    }
  //тук само съм се опитал да сортирам, нз  for (let obj in sortedKingdoms) {
  //тук само съм се опитал да сортирам, нз      for (let key in obj){
  //тук само съм се опитал да сортирам, нз          let sortedKeys = Object.keys(obj[key]).sort((a,b) => obj[key][a]-obj[key][b])
  //тук само съм се опитал да сортирам, нз      }
  //тук само съм се опитал да сортирам, нз  }

    console.log(sortedKingdoms);

}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);