import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/core/models/movies';
import { MoviesService } from 'src/app/core/services/movies.service';
import { uuid } from 'uuidv4';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieTitle: string = '';
  thumbnailUrl: string = '';
  description: string = '';
  language: string = '';
  isWatched: boolean = false;
  isFav: boolean = false;
  message: string = '';
  isAddMovieFailed: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.movieTitle && this.thumbnailUrl) {
      const newMovie: Movies = {
        Description: this.description,
        ThumbnailUrl: this.thumbnailUrl,
        Title: this.movieTitle,
        Id: Math.round(Math.random() * 100000),
        Language: this.language
      }
      this.moviesService.addMovie(newMovie).subscribe(
        (movie) => {
          this.message = "Success"
        },
        err =>
        {
          if (err.status === 403) {
            this.message = "failed: You no longer have permission"
          } else {
            this.message = err.message;
          }
          this.isAddMovieFailed = true;
        });
    }
  }
}
