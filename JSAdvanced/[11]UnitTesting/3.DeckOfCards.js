function printDeckOfCards(cardArr){
    let deck = [];
    function makeCard(face, suit) {
        let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];

        if (!validCards.includes(face)) {
            throw new Error("WrongFace");
        }
        if (!validSuits.includes(suit)) {
            throw new Error("wrongSuit");
        }

        let card = {
            face: face,
            suit: suit,
            toString: () => {
             let suitToChar = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C': '\u2663',
                }
                return `${face}${suitToChar[suit]}`
            }
        }
        return card;
    }

    for (let card of cardArr) {
        let cardFace = card.substring(0, card.length - 1);
        let cardSuit = card[card.length-1];
        try {
            deck.push(makeCard(cardFace, cardSuit));
        } catch (err){
            console.log("Invalid card: " + card);
            return;

        }
    }
    return deck.join(' ');
}

console.log(printDeckOfCards(['5S', '3D', 'QD', '2D']));
