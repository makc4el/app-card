import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { PlaytableComponent } from './playtable/playtable.component';


@NgModule({
  declarations: [
    PlaygroundComponent,
    PlayerComponent,
    CardComponent,
    PlaytableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }
