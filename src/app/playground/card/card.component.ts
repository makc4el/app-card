import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card.class.js';
import { cardImg } from './card-symbol';

@Component({
  selector: 'pg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  public cardSymbols;

  constructor() { 
  }

  ngOnInit() {
    this.cardSymbols = cardImg;
  }
}
