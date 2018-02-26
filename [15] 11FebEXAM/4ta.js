function gameOfEpicness(params,matrix) {
    let army = new Map();
    let winsAndLosses = new Map();
    fillArmy();


    for (let index = 0; index < matrix.length; index++) {
        let AttackingKingdom = matrix[index][0];
        let AttackingGeneral = matrix[index][1];
        let DefendingKingdom = matrix[index][2];
        let DefendingGeneral = matrix[index][3];

        if (AttackingKingdom !== DefendingKingdom) {
            let genA = army.get(AttackingKingdom).get(AttackingGeneral);
            let genB = army.get(DefendingKingdom).get(DefendingGeneral);

            if (genA > genB) {
                army.get(AttackingKingdom).set(AttackingGeneral,Math.floor(genA += genA *0.1));
                army.get(DefendingKingdom).set(DefendingGeneral,Math.floor(genB -= genB * 0.1)) ;

                winsAndLosses.get(AttackingKingdom).get(AttackingGeneral).wins++;

                winsAndLosses.get(DefendingKingdom).get(DefendingGeneral).loses++;
            }
            else if (genA < genB) {
                army.get(AttackingKingdom).set(AttackingGeneral,Math.floor(genA -= genA *0.1));
                army.get(DefendingKingdom).set(DefendingGeneral,Math.floor(genB += genB * 0.1)) ;

                winsAndLosses.get(AttackingKingdom).get(AttackingGeneral).loses++;

                winsAndLosses.get(DefendingKingdom).get(DefendingGeneral).wins++;
            }
        }
    }

    let sortings = [];
    sortWinner();

    let sorting = sortings.sort((a,b) => a.kingdom > b.kingdom)
        .sort((a,b) => a.totalWins < b.totalWins )
        .sort((a,b) => a.totalLoses > b.totalLoses )

    ;


    console.log(`Winner: ${sorting[0].kingdom}`);

    let gens = Array.from(army.get(sortings[0].kingdom))
        .sort(([k1,v1],[k2,v2])=>v1 < v2);

    for (const [k,v] of gens) {
        console.log(`/\\general: ${k}`);
        console.log(`---army: ${Math.trunc(v)}`);
        console.log(`---wins: ${winsAndLosses.get(sorting[0].kingdom).get(k).wins}`);
        console.log(`---losses: ${winsAndLosses.get(sorting[0].kingdom).get(k).loses}`);
    }

    function sortWinner() {
        for (const [k,v] of winsAndLosses) {
            let obj = {kingdom:k,totalWins:0,totalLoses:0};
            for (const [n,o] of v) {
                obj.totalWins+=o.wins;
                obj.totalLoses += o.loses;
            }
            sortings.push(obj);
        }
    }

    function fillArmy() {
        for (let obj of params) {
            if (!army.has(obj.kingdom)) {
                army.set(obj.kingdom,new Map())
            }
            if (!army.get(obj.kingdom).has(obj.general)) {
                army.get(obj.kingdom).set(obj.general,0);
            }
            if (!winsAndLosses.has(obj.kingdom)) {
                winsAndLosses.set(obj.kingdom,new Map());
            }
            if (!winsAndLosses.get(obj.kingdom).has(obj.general)) {
                winsAndLosses.get(obj.kingdom).set(obj.general,{wins:0,loses:0});
            }
            let currentArmy =  army.get(obj.kingdom).get(obj.general);
            currentArmy += obj.army;
            army.get(obj.kingdom).set(obj.general,currentArmy);
        }
    }
}
gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);