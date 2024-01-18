import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component'
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { OAuthtInterceptor } from './core/interceptors/oauth-request-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MovieCollectionComponent,
    ToolBarComponent,
    ButtonComponent,
    MovieTileComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: OAuthtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
