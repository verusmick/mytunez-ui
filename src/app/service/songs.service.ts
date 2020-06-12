import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.config'

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getSongs(artist: string) {
    return this.http.get(AppSettings.API_ENDPOINT + `songs?artist=${artist}`);
  }

  postSong(newSong: any) {
    return this.http.post(AppSettings.API_ENDPOINT + 'songs', newSong);
  }  
}
