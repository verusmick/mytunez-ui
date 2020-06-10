import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPlayerComponent } from './components/nav-player/nav-player.component';
import { ArtistsPanelComponent } from './components/artists-panel/artists-panel.component';
import { SongsPanelComponent } from './components/songs-panel/songs-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPlayerComponent,
    ArtistsPanelComponent,
    SongsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
