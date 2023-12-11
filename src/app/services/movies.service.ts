import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
import { AppSettings } from './appsettings.service';
import { TokenStorageService } from './token-storage.service';
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseApiUrl : string;

  constructor(private http: HttpClient,
    private settings: AppSettings, 
    private tokenService: TokenStorageService,
    private tokenStorage: TokenStorageService) {
    this.baseApiUrl = `${this.settings.api_url}/movie`;
   }

  getMovies(): Observable<Collection[]> {
    var user = this.tokenStorage.getUserInfo();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      }),
    };
    return this.http.get<Collection[]>(`${this.baseApiUrl}/collection/${user.UserId}`, httpOptions);
  }

  addMovie(movie: Movies): Observable<Movies> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      }),
    };
    const url = `${this.baseApiUrl}`;
    return this.http.post<Movies>(url, movie, httpOptions);
  }
}
