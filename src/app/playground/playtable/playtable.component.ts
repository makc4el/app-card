import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card.class';
import { Table } from 'src/app/classes/table.class';

@Component({
  selector: 'pg-playtable',
  templateUrl: './playtable.component.html',
  styleUrls: ['./playtable.component.css']
})
export class PlaytableComponent implements OnInit {
  @Input() table: Table;

  cards: Card[] = [];

  constructor() { }

  ngOnInit() {
    this.table.getCardsListStream().subscribe((data) => {
      this.cards = data;
    })
  }

}
