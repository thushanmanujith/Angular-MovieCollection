import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieCollectionComponent } from './components/movie-collection/movie-collection.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { AccountModule } from './components/account/account.module';
import { AuthenticatedGuard } from './core/route-guards/authenticated.guard';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => AccountModule
  },
  {
    path: 'Collection',
    canActivate: [AuthenticatedGuard],
    component: MovieCollectionComponent
  },
  { path: 'addMovie', component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
