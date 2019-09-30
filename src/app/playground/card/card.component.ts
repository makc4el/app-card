import { Component, OnInit, Input } from '@angular/core';
import { HttpRequestService } from './../../core/http-request.service';
import cardJson from './../../../assets/json/internal/card-json.json';
import { GlobalStoreService } from './../../core/global-store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [HttpRequestService]
})
export class CardComponent implements OnInit {
  @Input() cardObj: {value:string, suit:string, mod:boolean};
  cardConfig: any ;

  constructor(private httpService: HttpRequestService, private globalStore: GlobalStoreService) { 
    this.updateData();
  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.globalStore.getData().subscribe( (data) => {
      this.cardConfig = data.cardJson;
    });
  }

  getAttr(attr) {
    return attr?attr:'';
  }

  takeItem(val) {
  }

}
