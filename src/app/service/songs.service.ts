import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.config'

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  headers = new HttpHeaders().set("api-key", 'mytunez-tk');

  constructor(private http: HttpClient) { }

  getSongs(artist: string) {
    return this.http.get(AppSettings.API_ENDPOINT + `songs?artist=${artist}`, { headers: this.headers });
  }

  postSong(newSong: any) {
    return this.http.post(AppSettings.API_ENDPOINT + 'songs', newSong, { headers: this.headers });
  }
}
