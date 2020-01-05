import { Player } from './player.class';
import { BehaviorSubject } from 'rxjs';
import { Croupier } from './croupier.class';
import { Deck } from './deck.class';

export class Playground {
    private players: Player[];
    private _croupier: Croupier;
    // private players$: BehaviorSubject<Player[]> = new BehaviorSubject([]);

    constructor() {}

    static build({Deck}): Playground {
        const playground = new Playground()
        .setCroupier(Deck);
        return playground;
    }

    addPlayers(players) {
    //    const playersList = players.reduce((arr, player) => {
    //         arr.push(Player.build(player));
    //         return arr;
    //     }, this.players$.getValue());
    //     this.players$.next(playersList);
    }

    setCroupier(deck: Deck) {
        this._croupier = Croupier.build({Deck: deck});
        return this;
    }

    // getPlayers(): BehaviorSubject<Player[]> {
        // return this.players$;
    // }

    // getPlayersList(): Player[] {
        // return this.players$.getValue();
    // }


    giveCardForEach() {
        // this.croupier.deck.getDeckStream().subscribe((deck) => {
        //     this.croupier.setDeckList(deck);
        //     this.getPlayersList().forEach( (player) => {
        //         player.addCardToList(this.croupier.getRandomCard());
        //     });
        // });
    }

    giveCardToTable() {

    }
}