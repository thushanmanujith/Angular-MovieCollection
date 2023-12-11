import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/models/collection';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import testData  from 'src/db.json';


@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnInit {
  collection: Collection | undefined;
  movies: Movies[] = [];
  yetToWatchMovies: Movies[] = [];
  watchedMovies: Movies[] = [];
  movieTitle: string = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    debugger
    this.moviesService.getMovies().subscribe(() => this.collection);
    this.movies = testData.movies;
  }

  ngDoCheck(): void {
    if (this.movies.length) {
      this.movies = testData.movies;
    }
  }

  onFavClick(movie: Movies): void {
    // this.moviesService.updateMovie({ ...movie, isFav: !movie.isFav, isWatched: movie.isFav ? true : movie.isWatched }).subscribe((updatedMovie) => {
    //   if (updatedMovie.isWatched) {
    //     const alreadyWatched = this.watchedMovies.find(movie => movie.id === updatedMovie.id);
    //     if (alreadyWatched) {
    //       alreadyWatched.isFav = updatedMovie.isFav
    //       this.watchedMovies = this.watchedMovies.map((m) => {
    //         if (m.id === updatedMovie.id) {
    //           return updatedMovie;
    //         }
    //         return m;
    //       })
    //     } else {
    //       this.watchedMovies.push(updatedMovie);
    //     }
    //     this.yetToWatchMovies = this.yetToWatchMovies.filter((m) => m.id !== updatedMovie.id);
    //   }
    //   else {
    //     this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
    //     this.yetToWatchMovies.push(updatedMovie);
    //   }
    // });
  }

  onWatchedClick(movie: Movies): void {
    // const payloadMovie = { ...movie, isWatched: !movie.isWatched };
    // payloadMovie.isFav = payloadMovie.isWatched ? payloadMovie.isFav : false;
    // this.moviesService.updateMovie(payloadMovie).subscribe((updatedMovie) => {
    //   if (updatedMovie.isWatched) {
    //     this.watchedMovies.push(updatedMovie);
    //     this.yetToWatchMovies = this.yetToWatchMovies.filter((m) => m.id !== updatedMovie.id)
    //   } else {
    //     this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
    //     this.yetToWatchMovies.push(updatedMovie);
    //   }
    // });
  }

  onSubmit(): void {
  }

}
