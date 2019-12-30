import { CardSuit, CardValue } from "./../enums/card.enum";

export class Card {
    public value: CardValue;
    public suit: CardSuit;
    public id: number;

    constructor() {}

    static build({value, suit, id}) {
        const card = new Card()
        .setValue(value)
        .setSuit(suit)
        .setId(id)

        return card;
    }

    setId(id: number) {
        this.id = id;
        return this;
    }

    setValue(value: CardValue) {
        this.value = value;
        return this;
    } 

    setSuit(suit: CardSuit) {
        this.suit = suit;
        return this;
    }
}