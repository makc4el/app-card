import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../../classes/player.class';
import { Card } from 'src/app/classes/card.class';

@Component({
  selector: 'pg-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  public cards: Card[];
  public currentStep: number;

  constructor() {
    this.currentStep = 100;
  }

  ngOnInit() {
    this.player.getCardsListStream().subscribe((card) => {
      this.cards = card;
    });

    this.player.startTimer().subscribe((data) => {
      this.currentStep = data;
    });
  }
}
