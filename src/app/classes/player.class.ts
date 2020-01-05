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
            .setImage(img)
            .setBank(bank)
        
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

<<<<<<< HEAD
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
=======
    getCardList(): BehaviorSubject<Card[]> {
>>>>>>> a99233471d28d3bc4fb51e32bbe012eef02b8048
        return this.cards$;
    }

    addCardToList(card: Card) {
        this._cardsList.push(card);
        this.cards$.next(this._cardsList);
    }
}