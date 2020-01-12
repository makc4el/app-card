import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/classes/card.class';

@Component({
  selector: 'pg-playtable',
  templateUrl: './playtable.component.html',
  styleUrls: ['./playtable.component.css']
})
export class PlaytableComponent implements OnInit {

  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
