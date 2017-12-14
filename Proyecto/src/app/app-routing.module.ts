import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopularMovies } from './movies/PopularMovies/PopularMovies';
import { LastMovies } from './movies/LastMovies/LastMovies';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { CovalentPagingModule } from '@covalent/core';

const routes: Routes = [
  {path: '', redirectTo: 'InCines', pathMatch: 'full'},
  {path: 'InCines', component: LastMovies},
  {path: 'Popular', component: PopularMovies},
  {path: 'Details/:id', component: MoviesDetailComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
    CovalentPagingModule
  ],
  exports: [ RouterModule ]
,
declarations: []
})
export class AppRoutingModule { }
