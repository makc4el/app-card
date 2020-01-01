import { BehaviorSubject } from 'rxjs';
import { Card } from './card.class';

   
export class Player {
    private name: string;
    private bank: number;
    private image: string;
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
        this.name = name;
        return this;
    }

    setBank(bank: number) {
        this.bank = bank;
        return this;
    }

    setImage(img: string) {
        this.image = img;
        return this;
    }

    getCardList(): BehaviorSubject<Card[]> {
        return this.cards$;
    }

    addCardToList(card: Card) {
        const cardList = this.cards$.getValue();
        cardList.push(card);
        this.cards$.next(cardList);
    }
}