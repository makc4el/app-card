import { Player } from './player.class';
import { Deck } from './deck.class';
import { Card } from './card.class';

export class Croupier {
    deck: Deck;
    cardList: Card[];

    constructor() {

    }

    static build({Deck}) {
        const croupier = new Croupier()
        .setDeck(Deck);

        return croupier;
    }

    setDeck(deck: Deck) {
        this.deck = deck;
        this.deck.getDeck().subscribe((cards) => {
            this.cardList = cards;
        })

        return this;
    }

    makeRandom(length) {
        return Math.floor(Math.random() * length);  
    }

    getCard(index) {
        const slectedCard = this.cardList[index];
        this.cardList = this.cardList.filter((data) => data.id != slectedCard.id);
        return slectedCard;
    }

    getRandomCard() {
        const randomIndex = this.makeRandom(this.cardList.length);
        return this.getCard(randomIndex);
    }
}