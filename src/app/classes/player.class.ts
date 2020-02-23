import { BehaviorSubject, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './card.class';
   
export class Player {
    private _name: string;
    private _bank: number;
    private _image: string;
    private _time: number;
    private _cardsList: Card[] = [];
    private cards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);
    private _secondsCounter$ = timer(1000, 1000);

    constructor() {
    }

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

    get time() {
        return this._time;
    }

    getCardsListStream(): BehaviorSubject<Card[]> {
        return this.cards$;
    }

    addCardToList(card: Card) {
        this._cardsList.push(card);
        this.cards$.next(this._cardsList);
    }

    startTimer(time: number) {
        this._time = time;
        const subscription = this._secondsCounter$.pipe(map(() => {
            if(this._time == 0) subscription.unsubscribe();
        })).subscribe(() => {
            this._time -= 1;
        });
    }
}