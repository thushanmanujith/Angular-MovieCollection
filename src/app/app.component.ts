import { Component } from '@angular/core';
import { AppSettings } from './services/appsettings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-collection';
  constructor(private appSettings: AppSettings) {
  }
}
