import { Component, OnInit, Input } from '@angular/core';
import cardJson from './card-json.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardObj: {value:string, suit:string, mod:boolean};
  cardConfig: any  = cardJson; 

  constructor() { }

  ngOnInit() {
    console.log(this.cardObj, 'cardObj.suit');
  }

  getAttr(attr) {
    return attr?attr:'';
  }

  takeItem(val) {
    console.log(val,'val');
    console.log(this,'this');
  }

}
