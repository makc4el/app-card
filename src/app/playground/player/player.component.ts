import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../../classes/player.class';
import { Card } from 'src/app/classes/card.class';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'pg-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  public cards: Card[];

  constructor() {
  }

  ngOnInit() {
    this.player.getCardsListStream().subscribe((card) => {
      this.cards = card;
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

}
