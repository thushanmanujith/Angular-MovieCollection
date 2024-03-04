import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/core/models/collection';
import { Movies } from 'src/app/core/models/movies';
import { AuthService } from 'src/app/core/services/auth.service';
import { MoviesService } from 'src/app/core/services/movies.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import testData  from 'src/db.json';


@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {
  public collection: any;
  movies: any;
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];
  movieTitle: string = '';

  constructor(private moviesService: MoviesService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.moviesService.getMovieCollection().subscribe(data => 
      {
        this.collection = data;
        this.movies = this.collection.movies;
        console.log(this.movies);
      });
    //this.movies = testData.movies;
    this.getUser();
  }

  ngDoCheck(): void {
    // if (this.movies.length) {
    //   this.movies = testData.movies;
    // }
  }

  getUser(): void {
    this.authService.GetUser().subscribe(
      userData => {
        this.tokenStorage.saveUser(userData);
      }, err => {
      }
    );
  }

  onSearch(): void {
    this.moviesService.searchMovies(this.movieTitle, this.collection.id).subscribe(data => 
      {
        this.movies = data;
        console.log(this.movies);
      });
  }

}
