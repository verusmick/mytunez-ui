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
      let songsList = res.data.requests;
      for (let i = 0; i < songsList.length; i++) {
        songsList[i]['isPlaying'] = false;
        songsList[i]['lengthInMinutes'] = Math.floor(songsList[i]['length'] / 60);
        songsList[i]['hoverSong'] = false;
      }
      this.songs = songsList
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.watchArtist(changes.artist);
  }
  playSong(song) {
    for (let i = 0; i < this.songs.length; i++) {
      if (song.song_id === this.songs[i].song_id) {
        this.songs[i].isPlaying = !song.isPlaying;
      } else {
        this.songs[i].isPlaying = false
      }
    }
  }

  showPlayerIcon(event, song) {
    song.hoverSong = true;
  }
  hidePlayerIcon(event, song) {
    song.hoverSong = false;
  }
}