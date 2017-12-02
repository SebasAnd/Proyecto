import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LastMovieService } from './LastMovies/LastMoviesService';
import { PopularMoviesService } from './PopularMovies/PopularMoviesService';
import { AppComponent } from './app.component';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { LastMovies } from './LastMovies/LastMovies';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesDetailService } from './movies-detail/movies-detailservice';


@NgModule({
  declarations: [
    AppComponent,
    LastMovies,
    PopularMovies,
    MoviesDetailComponent
  ]  ,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [ LastMovieService, PopularMoviesService, MoviesDetailService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
