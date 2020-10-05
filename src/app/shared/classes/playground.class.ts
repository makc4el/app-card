import { Player } from './player.class';
import { BehaviorSubject } from 'rxjs';
import { Croupier } from './croupier.class';
import { Deck } from './deck.class';
import { Table } from './table.class';

export class Playground {
    private _table: Table;
    private _players: Player[] = [];
    private _croupier: Croupier;
    private players$: BehaviorSubject<Player[]> = new BehaviorSubject([]);

    constructor() {
        this._table = Table.build({});
    }

    static build({Deck}): Playground {
        const playground = new Playground()
        .setCroupier(Deck);
        return playground;
    }

    get table() {
        return this._table;
    }

    addPlayer(player) {
        this._players.push(Player.build(player));
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
        });
    }

    giveCardToTable() {
        this._table.addCard(this.getCard());
    }

    startGame() {
        this.players$.next(this._players);
        
        this.giveCardForEach();
        this.giveCardForEach();

        this.giveCardToTable();
        this.giveCardToTable();
        this.giveCardToTable();
    }
}