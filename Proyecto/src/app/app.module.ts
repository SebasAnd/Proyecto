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




@NgModule({
  declarations: [
    AppComponent,
    LastMovies,
    PopularMovies
  ]  ,
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [ LastMovieService, PopularMoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
