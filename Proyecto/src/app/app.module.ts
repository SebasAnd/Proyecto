import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LastMovieService } from './movies/LastMovies/LastMoviesService';
import {Tvshowspopularservice} from "./tvshows/tvshowspopular/tvshowspopularservice";
import { PopularMoviesService } from './movies/PopularMovies/PopularMoviesService';
import {LastActorsService} from "./actors/last-actors-component/last-actors-componentservice";
import { SearchService } from "./search/searchservice";
import {ActorsDetailService} from "./actors/actors-details/actors-detailservice";
import { AppComponent } from './app.component';
import { PopularMovies } from './movies/PopularMovies/PopularMovies';
import { LastMovies } from './movies/LastMovies/LastMovies';
import{TvshowsDetailComponent} from "./tvshows/tvshowsdetails/tvshows-detail.component";
import{TvshowspopularComponent} from "./tvshows/tvshowspopular/tvshowspopular.component";
import {SearchComponent} from "./search/search.component";
import{SearchmoviesComponent} from "./search/searchmovies/searchmovies.component";
import{SearchactorsComponent} from "./search/searchactors/searchactors.component";
import {SearchtvshowsComponent} from "./search/searchtvshows/searchtvshows.component";
import {ActorsDetailComponent} from "./actors/actors-details/actors-detail.component";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesDetailService } from './movies/movies-detail/movies-detailservice';
import{ LastActorsComponent } from './actors/last-actors-component/last-actors-component.component';
import{TvshowsDetailservice} from "./tvshows/tvshowsdetails/tvshows-detailservice";
import { CovalentLayoutModule, CovalentStepsModule, CovalentSearchModule /*, any other modules */ } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentPagingModule } from '@covalent/core';
import {MatFormFieldModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";





@NgModule({
  declarations: [
    AppComponent,
    LastMovies,
    PopularMovies,
    MoviesDetailComponent,
    LastActorsComponent,
    TvshowspopularComponent,
    TvshowsDetailComponent,
    SearchComponent,
    SearchmoviesComponent,
    SearchactorsComponent,
    SearchtvshowsComponent,
    ActorsDetailComponent
  ]  ,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentPagingModule,
    CovalentSearchModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,



  ],
  providers: [ LastMovieService, PopularMoviesService, MoviesDetailService,SearchService, LastActorsService,ActorsDetailService, Tvshowspopularservice,TvshowsDetailservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
