import { BehaviorSubject, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from './card.class';
   
export class Player {
    private _name: string;
    private _bank: number;
    private _image: string;
    private _time: number;
    private _cardsList: Card[] = [];
    private _cards$: BehaviorSubject<Card[]> = new BehaviorSubject([]);
    private _secondsCounter$ = timer(1000, 1000);
    private _stepCounter$: BehaviorSubject<number> = new BehaviorSubject(100);

    constructor() {
    }

    static build({name, bank, img}) {
        const player = new Player()
            .setName(name)
            .setImage(img)
            .setBank(bank)
            .setTimer(25);

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

    setTimer(time: number) {
        this._time = time;
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

    get timer() {
        return this._time;
    }

    getCardsListStream(): BehaviorSubject<Card[]> {
        return this._cards$;
    }

    addCardToList(card: Card) {
        this._cardsList.push(card);
        this._cards$.next(this._cardsList);
    }

    startTimer() {
        let time = this._time;
        let currentStep = 0;
        const subscription = this._secondsCounter$.pipe(
            map(() => {
                if (time === 0) {
                    subscription.unsubscribe();
                    return false;
                }
            })
        ).subscribe(() => {
            time -= 1;
            currentStep = time * (100 / this._time);
            this._stepCounter$.next(currentStep);
        });

        return this._stepCounter$.asObservable();
    }
}