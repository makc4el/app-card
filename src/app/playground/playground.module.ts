import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    PlaygroundComponent, 
    PlayerComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }
