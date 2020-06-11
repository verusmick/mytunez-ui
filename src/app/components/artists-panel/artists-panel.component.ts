import { Component, OnInit } from '@angular/core';
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

  constructor(private artistsService: ArtistsService) { }

  addArtist() {
    console.log('addArtist');
  }

  selectArtist(artist) {
    console.log('selectArtist')
    console.log(artist)
  }

  ngOnInit(): void {
    this.artistsService.getArtists().subscribe((res: any) => {
      this.artists = res.data.requests;
      console.log(this.artists);
    })
  }
}
