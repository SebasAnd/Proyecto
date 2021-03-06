import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopularMovies } from './movies/PopularMovies/PopularMovies';
import { LastMovies } from './movies/LastMovies/LastMovies';
import {TvshowspopularComponent} from "./tvshows/tvshowspopular/tvshowspopular.component";
import {SearchComponent} from "./search/search.component";
import{SearchmoviesComponent} from "./search/searchmovies/searchmovies.component";
import{SearchactorsComponent} from "./search/searchactors/searchactors.component";
import{ActorsDetailComponent} from "./actors/actors-details/actors-detail.component";
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { CovalentPagingModule } from '@covalent/core';
import {LastActorsComponent} from "./actors/last-actors-component/last-actors-component.component";
import {TvshowsDetailComponent} from "./tvshows/tvshowsdetails/tvshows-detail.component";
import {SearchtvshowsComponent} from "./search/searchtvshows/searchtvshows.component";

const routes: Routes = [
  {path: '', redirectTo: 'InCines', pathMatch: 'full'},
  {path: 'InCines', component: LastMovies},
  {path: 'Popular', component: PopularMovies},
  {path: 'TvShows', component: TvshowspopularComponent},
  {path: 'Tvshows-detail/:id', component:TvshowsDetailComponent},
  {path: 'Details/:id', component: MoviesDetailComponent},
  {path: 'Search/:word', component:SearchComponent},
  {path: 'Movies/:word', component:SearchmoviesComponent},
  {path: 'Actors/:word', component:SearchactorsComponent},
  {path: 'Tvshows/:word', component:SearchtvshowsComponent},
  {path:'Actors', component: LastActorsComponent},
  {path: 'Actors-detail/:id', component: ActorsDetailComponent},
  ]


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
