import { Component, OnInit } from '@angular/core';
import { player1, player2, player3 } from '@shared/mock-data/players';
import { Playground } from '@shared/classes/playground.class';
import { Deck } from '@shared/classes/deck.class';
import { DeckMock } from '@shared/mock-data/deck';
import { Card } from '@shared/classes/card.class';
import { Croupier } from '@shared/classes/croupier.class'; 
import { Player } from '@shared/classes/player.class';
import { DeckService } from '@core/services/deck.service';
import { Table } from '@shared/classes/table.class';

@Component({
  selector: 'pg-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})

export class PlaygroundComponent implements OnInit {
  private playground: Playground;
  private deck: Deck;
  private coupier: Croupier;

  public table: Table;
  public playersList: Player[];

  constructor() {
    this.deck = Deck.build([]);
    DeckMock.suitTypes.forEach((suit) => {
      DeckMock.suitValue.forEach((value, index) => {
        this.deck.addCard(Card.build({value, suit, id: index}));
      })
    })

    this.playground = Playground.build({Deck: this.deck});
    [player1, player2, player3].forEach( (player) => {
      this.playground.addPlayer(player);
    });

    this.playground.getPlayersStream().subscribe( (data) => {
      this.playersList = data;
    });

    this.table = this.playground.table;
  }

  ngOnInit() {
    this.playground.startGame();
    // this.playground.giveCardForEach();
    // this.playground.giveCardForEach();

    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
    // this.tableList.push(this.playground.getCard());
  }
}