import { Component, OnInit } from '@angular/core';
import { CardDeckService } from '../card-deck/card-deck.service';
import { GlobalStoreService } from './../core/global-store.service';
import cardJson from './../../assets/json/internal/card-json.json';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  cardTypes: any;

  constructor(private cardDeckService: CardDeckService, private GlobalStore: GlobalStoreService) {
  }

  getData() {
    this.GlobalStore.saveData('cardJson', cardJson);
  }

  ngOnInit() {
    this.getData();
  }

}
