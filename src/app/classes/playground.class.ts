import { Player } from './player.class';
import { BehaviorSubject } from 'rxjs';
import { Croupier } from './croupier.class';
import { Deck } from './deck.class';

export class Playground {
    private _players: Player[] = [];
    private _croupier: Croupier;
    private players$: BehaviorSubject<Player[]> = new BehaviorSubject([]);

    constructor() {}

    static build({Deck}): Playground {
        const playground = new Playground()
        .setCroupier(Deck);
        return playground;
    }

    addPlayer(player) {
        this._players.push(Player.build(player));
        this.players$.next(this._players);
    }

    getPlayersStream() {
        return this.players$;
    }

    setCroupier(deck: Deck) {
        this._croupier = Croupier.build({Deck: deck});
        return this;
    }

    getCard() {
        return this._croupier.getRandomCard();
    }

    giveCardForEach() {
        this._players.forEach((player) => {
            player.addCardToList(this.getCard());
        })
    }

    giveCardToTable() {

    }
}