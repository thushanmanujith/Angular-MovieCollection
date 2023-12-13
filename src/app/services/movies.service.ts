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
   
  getMovieCollection(): Observable<Collection> {
    var user = this.tokenStorage.getUserInfo();
    return this.http.get<Collection>(`${this.baseApiUrl}/collection/${user.UserId}`);
  }

  searchMovies(searchText: string, collectionId: number): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseApiUrl}/collection/${collectionId}/search/?searchText=`+ encodeURIComponent(searchText));
  }

  addMovie(movie: Movies): Observable<Movies> {
    const url = `${this.baseApiUrl}/add`;
    return this.http.post<Movies>(url, movie);
  }
}
