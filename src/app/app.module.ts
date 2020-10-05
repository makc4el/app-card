import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundModule } from '@modules/playground/playground.module';
import { InfoComponent } from '@modules/info/info.component';
import { HeaderComponent } from '@modules/header/header.component';
import { HttpClientModule }   from '@angular/common/http';
import { DeckService } from '@core/services/deck.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaygroundModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
