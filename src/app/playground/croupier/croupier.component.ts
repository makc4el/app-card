import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-croupier',
  templateUrl: './croupier.component.html',
  styleUrls: ['./croupier.component.css']
})
export class CroupierComponent implements OnInit {
  currentDeck: any;

  constructor() {

  }

  ngOnInit() {
    this.initDeck();
  }

  initDeck() {

  }

}
