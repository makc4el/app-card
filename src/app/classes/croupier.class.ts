import { Player } from './player.class';
import { Deck } from './deck.class';
import { Card } from './card.class';

export class Croupier {
    public deck: Deck;
    private deckList: Card[];

    constructor() {}

    static build({Deck}) {
        const croupier = new Croupier()
        .setDeck(Deck);

        return croupier;
    }

    setDeck(deck: Deck) {
        this.deck = deck;
        return this;
    }

    setDeckList(deckList) {
        this.deckList = deckList;
        return this;
    }

    makeRandom(length) {
        return Math.floor(Math.random() * length);  
    }

    getCard(index) {
        const slectedCard = this.deckList[index];
        this.deckList = this.deckList.filter((data) => data.id != slectedCard.id);
        return slectedCard;
    }

    getRandomCard() {
        const randomIndex = this.makeRandom(this.deckList.length);
        return this.getCard(randomIndex);
    }
}