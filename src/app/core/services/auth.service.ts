import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './appsettings.service';
import { TokenStorageService } from './token-storage.service';
import { OAuthToken } from '../interceptors/oauth-token';
import * as moment from 'moment';

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

  public redirectURL!: string;

  public get isOAuthTokenValid(): boolean {
      const tokenPayload = this.getTokenFromStorage();
      const isValid = !!tokenPayload.exp && (Date.now() < tokenPayload.exp * 1000);
      return isValid;
  }

  public getTokenFromStorage() {
    const token = sessionStorage.getItem(TOKEN_KEY);
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      console.log(JSON.parse(payload))
      return JSON.parse(payload);
    } else {
      return null;
    }
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