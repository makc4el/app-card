import { Component, OnInit } from '@angular/core';
import { player1, player2, player3 } from './../mock-data/players';
import { Playground } from './../classes/playground.class';
import { Deck } from './../classes/deck.class';
import { DeckMock } from './../mock-data/deck';
import { Card } from '../classes/card.class';
import { Croupier } from './../classes/croupier.class'; 
import { Player } from '../classes/player.class';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'pg-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  private playground: Playground;
  private deck: Deck;
  private coupier: Croupier;

  public playersList: Player[];

  constructor(
    private deckService: DeckService
  ) {
    let index = 0;
    this.deck = Deck.build([]);
    for(let suit of DeckMock.suitTypes) {
      for (let value of DeckMock.suitValue) {
        this.deck.addCard(Card.build({value, suit, id: index}));
        index++;
      }
    }

    this.coupier = Croupier.build({Deck: this.deck});
    this.playground = Playground.build({croupier: this.coupier});
    this.playground.addPlayers([player1, player2, player3]);

    this.playground.getPlayers().subscribe( (data) => {
      this.playersList = data;
      this.playground.giveCardForEach();
    });
  }

  ngOnInit() {
  }
}
