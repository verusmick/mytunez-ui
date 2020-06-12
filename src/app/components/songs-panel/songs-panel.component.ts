import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
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
  @Output()
  songSelected: EventEmitter<object> = new EventEmitter<object>();
  currentArtist;

  constructor(private songsService: SongsService) { }

  ngOnInit(): void { }

  watchArtist(change) {
    this.currentArtist = change.currentValue;
    this.getSongs(this.currentArtist)
  }

  getSongs(artist) {
    if(artist){
      this.songsService.getSongs(artist.artist_id).subscribe((res: any) => {
        let songsList = res.data.requests;
        for (let i = 0; i < songsList.length; i++) {
          songsList[i]['isPlaying'] = false;
          songsList[i]['lengthInMinutes'] = Math.floor(songsList[i]['length'] / 60);
          songsList[i]['hoverSong'] = false;
        }
        this.songs = songsList
      })
    }    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.watchArtist(changes.artist);
  }

  clickSong(song) {
    for (let i = 0; i < this.songs.length; i++) {
      if (song.song_id === this.songs[i].song_id) {
        this.songs[i].isPlaying = !song.isPlaying;
      } else {
        this.songs[i].isPlaying = false
      }
    }
  }

  playSong(song) {
    for (let i = 0; i < this.songs.length; i++) {
      if (song.song_id === this.songs[i].song_id) {
        this.songs[i].isPlaying = !song.isPlaying;
      } else {
        this.songs[i].isPlaying = false
      }
    }

    this.songSelected.emit({
      songPath: this.serverPath + song.song_path,
      play: true
    });
  }
  stopSong() {
    for (let i = 0; i < this.songs.length; i++) {
      this.songs[i].isPlaying = false
    }
    this.songSelected.emit({
      songPath: '',
      play: false
    });
  }

  showPlayerIcon(event, song) {
    song.hoverSong = true;
  }
  hidePlayerIcon(event, song) {
    song.hoverSong = false;
  }

  addSong(event) {
    let parseNewSong = {};
    let newSongformData = new FormData();

    newSongformData.append("uploads[]", event.imgFile, event.imgFile.name);
    newSongformData.append("uploads[]", event.songFile, event.songFile.name);
    newSongformData.append("title", event.title);
    newSongformData.append("genre", event.genre);
    newSongformData.append('releaseYear', event.releaseYear);
    newSongformData.append("album", event.album);
    newSongformData.append("artistId", this.currentArtist.artist_id + '');
    newSongformData.append("lenght", event.lenght);
    this.songsService.postSong(newSongformData).subscribe((res: any) => {
      this.getSongs(this.currentArtist);
    })
  }
}