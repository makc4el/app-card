import { Card } from "./card.class";
import { BehaviorSubject, of } from 'rxjs';
import { filter } from 'minimatch';

export class Deck {
    private cardDeck$: BehaviorSubject<Card[]> = new BehaviorSubject([]);

    constructor() {}

    static build(cards: Card[]) {
        const deck = new Deck()
        .setDeck(cards);
        return deck;
    }

    getDeck(): BehaviorSubject<Card[]> {
        return this.cardDeck$;
    }

    setDeck(cards: Card[]) {
        this.cardDeck$.next(cards.map((card) => Card.build(card)));
        return this;
    }

    addCard(card: Card) {
        const cards = this.cardDeck$.getValue();
        cards.push(card);
        this.cardDeck$.next(cards);
    }
}
