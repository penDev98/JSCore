function makeCard(card, suit){
    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];

    if (!validCards.includes(card)){
        throw new Error("Wrong Face");
    }
    if(!validSuits.includes(suit)){
        throw new Error("Wrong Suit");
    }

    let cardOfficial = {
        card: card,
        suit: suit,
        toString: () =>{
            let suitToChar = {
                'S': '\u2660',
                'H': '\u2665',
                'D': '\u2666',
                'C': '\u2663',
            }
            return `${card}${suitToChar[suit]}`
        }
    }
    return cardOfficial;
}
console.log('' + makeCard('10', 'H'));