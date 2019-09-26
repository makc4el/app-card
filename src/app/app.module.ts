import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundModule } from './playground/playground.module';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule }   from '@angular/common/http';
import { GlobalStoreService } from './core/global-store.service';
import { CardDeckService } from './card-deck/card-deck.service';

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
    HttpClientModule
  ],
  providers: [GlobalStoreService, CardDeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
