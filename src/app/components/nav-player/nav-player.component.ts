import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-player',
  templateUrl: './nav-player.component.html',
  styleUrls: ['./nav-player.component.scss']
})
export class NavPlayerComponent implements OnInit {
  @Input() songSelected;
  src: string = '';
  public autoplay: boolean = false;
  public volume: number = 1.0;
  @ViewChild('audioElement', { static: false }) public _audioRef: ElementRef;
  private audio: HTMLMediaElement;

  constructor() {
  }

  ngOnInit(): void { }
  public pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  public get paused(): boolean {
    if (this.audio) {
      return this.audio.paused;
    } else {
      return true;
    }
  }

  public play(): void {
    if (this.audio) {
      if (this.audio.readyState >= 2) {
        this.audio.play();
      }
    }
  }

  public ngAfterViewInit() {
    this.audio = this._audioRef.nativeElement;
    if (this.audio) {
      this.audio.volume = this.volume;
      this.audio.autoplay = this.autoplay;
    }
  }

  watchSongSelected(songSelected) {
    if (songSelected.play) {
      this.src = songSelected.songPath;
    } else {
      this.src = '';
    }
    setTimeout(() => {
      songSelected.play ? this.play() : this.pause();
    }, 200)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.watchSongSelected(changes.songSelected.currentValue);
  }
}