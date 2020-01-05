import { Deck } from './deck.class';
import { Card } from './card.class';

export class Croupier {
    private deck: Deck;
    private cardsList: Card[];

    constructor() {}

    static build({Deck}) {
        const croupier = new Croupier()
        .setDeck(Deck);

        return croupier;
    }

    setDeck(deck: Deck) {
        this.deck = deck;
        this.deck.getDeckStream().subscribe( (cards) => {
            this.cardsList = cards;
        })

        return this;
    }

    makeRandom(length) {
        return Math.floor(Math.random() * length);  
    }

    getRandomCard() {
        const randomIndex = this.makeRandom(this.cardsList.length);
        return this.deck.getCard(randomIndex);
    }
}