import { BehaviorSubject } from 'rxjs';
import { Card } from './card.class';

   
export class Player {
    private _name: string;
    private _bank: number;
    private _image: string;
    private _cardsList: Card[] = [];
    private cards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);

    constructor() {}

    static build({name, bank, img}) {
        const player = new Player()
            .setName(name)
            .setBank(bank)
            .setImage(img)
        
        return player;
    }

    setName(name: string) {
        this._name = name;
        return this;
    }

    setBank(bank: number) {
        this._bank = bank;
        return this;
    }

    setImage(img: string) {
        this._image = img;
        return this;
    }

    get name() {
        return this._name;
    }

    get bank() {
        return this._bank;
    }

    get image() {
        return this._image;
    }

    get cardsList(): Card[] {
        return this._cardsList;
    }

    getCardsListStream(): BehaviorSubject<Card[]> {
        return this.cards$;
    }

    addCardToList(card: Card) {
        this._cardsList.push(card);
        this.cards$.next(this._cardsList);
    }
}