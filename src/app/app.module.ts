import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { OfflineSearchComponent } from './components/offline-search/offline-search.component';
import { FormsModule } from '@angular/forms';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllGamesComponent,
    GameItemComponent,
    OfflineSearchComponent,
    GameDetailComponent,
    AdvanceSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
