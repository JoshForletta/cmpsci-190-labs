function Card(suit, face) {
    this.suit = suit;
    this.face = face;

    this.setSuit = function(newSuit) {
        this.suit = newSuit;
    }

    this.setFace = function(newFace) {
        this.face = newFace;
    }
}


let card = new Card("Clubs", "King");

card.setFace("Queen");
card.setSuit("Diamonds");

this.document.write(card.face + " of " + card.suit);
