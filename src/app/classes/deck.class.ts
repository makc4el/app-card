import { Card } from "./card.class";
import { BehaviorSubject } from 'rxjs';
import { filter } from 'minimatch';

export class Deck {
    private cardDeck$: BehaviorSubject<Card[]> = new BehaviorSubject([]);

    constructor() {}

    static build(cards: Card[]) {
        const deck = new Deck()
        .setDeck(cards);
        return deck;
    }

    getDeckStream(): BehaviorSubject<Card[]> {
        return this.cardDeck$;
    }

    get getDeckValue(): Card[] {
        return this.cardDeck$.getValue();
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
