import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { CroupierComponent } from './croupier/croupier.component';

@NgModule({
  declarations: [
    PlaygroundComponent, 
    PlayerComponent,
    CardComponent,
    CroupierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }
