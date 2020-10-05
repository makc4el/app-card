import { Card } from "./card.class";
import { BehaviorSubject } from 'rxjs';

export class Deck {
    private _cardDeck: Card[] = [];
    private cardDeck$: BehaviorSubject<Card[]> = new BehaviorSubject([]);

    constructor() {}

    static build(cards: Card[]) {
        const deck = new Deck()
        .setDeck(cards);
        return deck;
    }

    setDeck(cards: Card[]) {
        this._cardDeck = cards;
        this.cardDeck$.next(cards.map((card) => Card.build(card)));

        return this;
    }

    get cardDeck() {
        return this._cardDeck;
    }

    getDeckStream(): BehaviorSubject<Card[]> {
        return this.cardDeck$;
    }

    addCard(card: Card) {
        this._cardDeck.push(card);
        this.cardDeck$.next(this._cardDeck);
    }

    getCard(id: number) {
        const card = this._cardDeck[id];
        this._cardDeck.filter((data) => data.id != card.id);
        return card;
    }
}
