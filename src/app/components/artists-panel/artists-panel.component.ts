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

  @Output()
  artistSelected : EventEmitter<object> = new EventEmitter<object>();

  constructor(private artistsService: ArtistsService) { }

  addArtist() {
    console.log('addArtist');
  }

  selectArtist(artist) {    
    this.artistSelected.emit(artist);
  }

  ngOnInit(): void {
    this.artistsService.getArtists().subscribe((res: any) => {
      this.artists = res.data.requests;      
    })
  }
}
