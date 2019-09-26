import { Component, OnInit, Input } from '@angular/core';
import { GlobalStoreService } from './../../core/global-store.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInfo: {name:string, bank:number, img:string};

  @Input() cardList: {value:string, suit:string, mod:boolean}[];

  cardConfig: any;


  constructor(private GlobalStore: GlobalStoreService) {
  }

  ngOnInit() {
  }

}
