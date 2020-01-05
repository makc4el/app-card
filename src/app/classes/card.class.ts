import { CardSuit, CardValue } from "./../enums/card.enum";

export class Card {
    private _value: CardValue;
    private _suit: CardSuit;
    private _id: number;

    constructor() {}

    static build({value, suit, id}) {
        const card = new Card()
        .setValue(value)
        .setSuit(suit)
        .setId(id)

        return card;
    }

    setId(id: number) {
        this._id = id;
        return this;
    }

    setValue(value: CardValue) {
        this._value = value;
        return this;
    }

    setSuit(suit: CardSuit) {
        this._suit = suit;
        return this;
    }

    get id() {
        return this._id;
    }
    get value() {
        return this._value;
    }

    get suit() {
        return this._suit;
    }

}