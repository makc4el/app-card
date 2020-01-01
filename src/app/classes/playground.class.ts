import { Player } from './player.class';
import { BehaviorSubject } from 'rxjs';
import { Croupier } from './croupier.class';

export class Playground {
    private players$: BehaviorSubject<Player[]> = new BehaviorSubject([]);
    private croupier: Croupier;

    constructor() {}

    static build({croupier}) {
        const playground = new Playground()
        .setCroupier(croupier)
        return playground;
    }

    setPlayers(players) {
       const playersList = players.reduce((arr, player) => {
            arr.push(Player.build(player));
            return arr;
        }, this.players$.getValue());
        this.players$.next(playersList);
    }

    setCroupier(croupier: Croupier) {
        this.croupier = croupier;
        return this;
    }

    getPlayers(): BehaviorSubject<Player[]> {
        return this.players$;
    }

    getPlayersList(): Player[] {
        return this.players$.getValue();
    }

    giveCard() {
        this.getPlayersList().forEach( (player) => {
            player.addCardToList(this.croupier.getRandomCard());
        });
    }
}