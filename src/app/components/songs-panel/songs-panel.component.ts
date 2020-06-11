import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SongsService } from '../../service/songs.service'
import { AppSettings } from '../../app.config'

@Component({
  selector: 'app-songs-panel',
  templateUrl: './songs-panel.component.html',
  styleUrls: ['./songs-panel.component.scss']
})
export class SongsPanelComponent implements OnInit {
  songs = [];
  @Input() artist;
  serverPath: string = AppSettings.API_ENDPOINT + 'src/song/';


  constructor(private songsService: SongsService) { }

  ngOnInit(): void { }

  watchArtist(change) {
    this.songsService.getSongs(change.currentValue.artist_id).subscribe((res: any) => {
      this.songs = res.data.requests;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.watchArtist(changes.artist);
  }
}
