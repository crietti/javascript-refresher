listCards("Diamonds");
listCards("Hearts");
listCards("Spades");
listCards("Clubs");

function listCards(suit) {
    console.log("Ace of " + suit);
    for (let i = 2; i < 11; i++) {
        console.log(i + " of " + suit);
    }
    console.log("Jack of " + suit)
    console.log("Queen of " + suit)
    console.log("King of " + suit)
}