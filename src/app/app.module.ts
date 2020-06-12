import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavPlayerComponent } from './components/nav-player/nav-player.component';
import { ArtistsPanelComponent } from './components/artists-panel/artists-panel.component';
import { SongsPanelComponent } from './components/songs-panel/songs-panel.component';


// services
import{ArtistsService} from './service/artists.service';
import{SongsService} from './service/songs.service';
import { AddArtistModalComponent } from './components/artists-panel/add-artist-modal/add-artist-modal.component';
import { AddSongModalComponent } from './components/songs-panel/add-song-modal/add-song-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPlayerComponent,
    ArtistsPanelComponent,
    SongsPanelComponent,
    AddArtistModalComponent,
    AddSongModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    ArtistsService,
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
