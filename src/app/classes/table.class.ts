import { Card } from './card.class';
import { BehaviorSubject } from 'rxjs';

export class Table {
    private _cardsList: Card[] = [];
    private _cards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);

    static build(data) {
        const table = new Table()
        .setCards(data.cards);
        return table;
    }

    get cardsList(): Card[] {
        return this._cardsList;
    }

    setCards(cards) {
        if(!cards) return this;
        this._cardsList = cards;
        this._cards$.next(this._cardsList);
        return this;
    }

    getCardsListStream(): BehaviorSubject<Card[]> {
        return this._cards$;
    }

    addCard(card: Card) {
        this.cardsList.push(card);
        this._cards$.next(this._cardsList);
    }
}