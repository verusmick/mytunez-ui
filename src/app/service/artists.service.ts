import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.config'

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(AppSettings.API_ENDPOINT + 'artists');
  }
  postArtist(newArtist:any) {
    return this.http.post(AppSettings.API_ENDPOINT + 'artists', newArtist);
  }
}
