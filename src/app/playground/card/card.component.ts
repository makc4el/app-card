import { Component, OnInit, Input } from '@angular/core';
import { HttpRequestService } from './../../core/http-request.service';
import cardJson from './../../../assets/json/internal/card-json.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [HttpRequestService]
})
export class CardComponent implements OnInit {
  @Input() cardObj: {value:string, suit:string, mod:boolean};
  cardConfig: any ;

  constructor(private httpService: HttpRequestService) { 

  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.cardConfig = cardJson;
  }

  getAttr(attr) {
    return attr?attr:'';
  }

  takeItem(val) {
  }

}
