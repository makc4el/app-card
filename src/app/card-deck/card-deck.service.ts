import { Injectable } from '@angular/core';
import { HttpRequestService } from './../core/http-request.service';
import { GlobalStoreService } from './../core/global-store.service';

@Injectable({
  providedIn: 'root'
})

export class CardDeckService {
  deckJson: any;
  
  constructor(private http: HttpRequestService, private globalStore: GlobalStoreService) { 
    this.getDeck();
  }

  generateDeck(obj) {
    let cardDeck = [];
    for (let suitItem of obj.suitTypes) {
      for (let cardItem of obj.suitValue) {
        let Item = Object.assign({}, cardItem);
        Item.suit = suitItem;
        cardDeck.push(Item);
      }
    }

    return cardDeck;
  }

  getDeck() {
    this.http.getData('./../assets/json/external/deck-json.json').subscribe((resonse) => {
      this.deckJson = resonse;
      let cardDeck = this.generateDeck(this.deckJson);
      this.globalStore.saveData('cardDeck', cardDeck);
    });
  }
}
