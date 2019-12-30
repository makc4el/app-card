import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { CroupierComponent } from './croupier/croupier.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule  } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    PlaygroundComponent, 
    PlayerComponent,
    CardComponent,
    CroupierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule
  ],
  exports: [
    PlaygroundComponent
  ]
})
export class PlaygroundModule { }
