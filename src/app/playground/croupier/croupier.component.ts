import { Component, OnInit } from '@angular/core';
import { CardDeckService } from './../../card-deck/card-deck.service';
import { GlobalStoreService } from './../../core/global-store.service';

@Component({
  selector: 'app-croupier',
  templateUrl: './croupier.component.html',
  styleUrls: ['./croupier.component.css']
})
export class CroupierComponent implements OnInit {
  currentDeck: any;

  constructor(private cardDeck: CardDeckService, private globalStore: GlobalStoreService) {

  }

  ngOnInit() {
    this.initDeck();
  }

  initDeck() {
    this.cardDeck.getDeck();
    this.globalStore.getData().subscribe( (data) => {
      // console.log(data , 'data');
      this.currentDeck = data;
    });
  }

}
