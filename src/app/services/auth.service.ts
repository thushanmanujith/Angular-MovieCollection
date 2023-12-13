import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './appsettings.service';
import { TokenStorageService } from './token-storage.service';
import { OAuthToken } from '../interceptors/oauth-token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_API: string;

  private _oAuthToken!: OAuthToken;

  public get oAuthToken(): OAuthToken {
      if (!this._oAuthToken) {
          var valuesFromStorage: any = {};
          try { valuesFromStorage = JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}', OAuthToken.JSONParseReviver); }
          catch (error) { console.log('Skipping error. Token data in storage is either corrupted/depreciated ...', error); }
          this._oAuthToken = Object.assign(new OAuthToken(), valuesFromStorage);
      }
      return this._oAuthToken;
  }

  constructor(private http: HttpClient,
    private settings: AppSettings,
    private tokenService: TokenStorageService) { 
    this.AUTH_API = `${this.settings.api_url}/auth/`;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'login', {
      Email: username,
      Password: password
    }, httpOptions);
  }

  GetUser(): Observable<any> {
    return this.http.get(this.AUTH_API + 'users');
  }
}