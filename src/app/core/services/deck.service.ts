import { Injectable } from '@angular/core';
import { Deck } from '@shared/classes/deck.class';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private deck$: BehaviorSubject<Deck> = new BehaviorSubject(undefined);

  constructor() { 
  }

  setDeck(deck: Deck) {
    this.deck$.next(deck);
  }

  getDeck(): BehaviorSubject<Deck> {
    return this.deck$;
  }
}
