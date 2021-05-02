import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { QueueComponent } from './queue/queue.component';
import { HistoryComponent } from './history/history.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ConvertMinutesPipe } from './pipes/convert-minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    HistoryComponent,
    FavoriteComponent,
    ConvertMinutesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
