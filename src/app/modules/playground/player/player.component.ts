import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@shared/classes/player.class';
import { Card } from '@shared/classes/card.class';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'pg-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;

  public cards: Card[];
  // public currentStep: number;

  constructor() {
    // this.currentStep = 100;
  }

  ngOnInit() {
    this.player.getCardsListStream().subscribe((card) => {
      this.cards = card;
    });

    // this.player.startTimer().subscribe((data) => {
    //   this.currentStep = data;
    // });
  }
}
