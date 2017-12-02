import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { LastMovies } from './LastMovies/LastMovies';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'InCines', pathMatch: 'full'},
  {path: 'InCines', component: LastMovies},
  {path: 'Popular', component: PopularMovies},
  {path: 'Details/:id', component: MoviesDetailComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ]
,
declarations: []
})
export class AppRoutingModule { }
