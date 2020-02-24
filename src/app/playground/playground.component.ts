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

  public tableList: Card[];
  public playersList: Player[];

  constructor(
    private deckService: DeckService
  ) {
    this.tableList = [];

    let index = 0;
    this.deck = Deck.build([]);
    for (const suit of DeckMock.suitTypes) {
      for (const value of DeckMock.suitValue) {
        this.deck.addCard(Card.build({value, suit, id: index}));
        index++;
      }
    }

    this.playground = Playground.build({Deck: this.deck});

    [player1, player2, player3].forEach( (player) => {
      this.playground.addPlayer(player);
    });

    this.playground.getPlayersStream().subscribe( (data) => {
      this.playersList = data;
    });
  }

  ngOnInit() {
    this.playground.giveCardForEach();
    // this.playground.giveCardForEach();

    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
  }
}