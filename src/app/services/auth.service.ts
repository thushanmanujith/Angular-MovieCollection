import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './appsettings.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_API: string;
  constructor(private http: HttpClient, private settings: AppSettings) { 
    this.AUTH_API = `${this.settings.api_url}/auth/`;
  }

  login(username: string, password: string): Observable<any> {
    debugger
    return this.http.post(this.AUTH_API + 'login', {
      Email: username,
      Password: password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}