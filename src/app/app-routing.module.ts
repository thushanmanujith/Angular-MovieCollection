import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'Collection', component: MovieCollectionComponent },
  { path: 'addMovie', component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
