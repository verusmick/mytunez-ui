import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArtistsService } from '../../service/artists.service'
import { AppSettings } from '../../app.config'

@Component({
  selector: 'app-artists-panel',
  templateUrl: './artists-panel.component.html',
  styleUrls: ['./artists-panel.component.scss']
})
export class ArtistsPanelComponent implements OnInit {
  artists = [];
  serverPath: string = AppSettings.API_ENDPOINT + 'src/artist/';
  newArtistEvent;

  @Output()
  artistSelected: EventEmitter<object> = new EventEmitter<object>();

  constructor(private artistsService: ArtistsService) { }

  selectArtist(artist) {
    this.artistSelected.emit(artist);
  }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists() {
    this.artistsService.getArtists().subscribe((res: any) => {
      this.artists = res.data.requests;
      if(this.artists.length > 0){
        this.selectArtist(this.artists[0]);
      }
    })
  }

  addArtist(event) {
    console.log('addArtist', event);
    let parseNewArtist = {};
    let newArtistformData = new FormData();
    newArtistformData.append("uploads[]", event.imgFile, event.imgFile.name);
    newArtistformData.append("name", event.name);
    newArtistformData.append("genres", event.genres);
    newArtistformData.append('members', event.members);
    newArtistformData.append("website", event.website);
    this.artistsService.postArtist(newArtistformData).subscribe((res: any) => {
      this.getArtists();
    })
  }
}
