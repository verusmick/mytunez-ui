import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavPlayerComponent } from './components/nav-player/nav-player.component';
import { ArtistsPanelComponent } from './components/artists-panel/artists-panel.component';
import { SongsPanelComponent } from './components/songs-panel/songs-panel.component';


// services
import{ArtistsService} from './service/artists.service';
import{SongsService} from './service/songs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavPlayerComponent,
    ArtistsPanelComponent,
    SongsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArtistsService,
    SongsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
