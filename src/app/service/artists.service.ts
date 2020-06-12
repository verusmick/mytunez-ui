import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.config'


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  headers = new  HttpHeaders().set("api-key", 'mytunez-tk');

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(AppSettings.API_ENDPOINT + 'artists', {headers:this.headers});
  }
  postArtist(newArtist:any) { 
    return this.http.post(AppSettings.API_ENDPOINT + 'artists', newArtist,{headers:this.headers});
  }
}
