import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInfo: {name:string, bank:number, img:string};

  @Input() cardList: {value:string, suit:string, mod:boolean}[];


  constructor() { }

  ngOnInit() {
  }

}
