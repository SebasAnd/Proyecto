import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LastMovieService } from './movies/LastMovies/LastMoviesService';
import { PopularMoviesService } from './movies/PopularMovies/PopularMoviesService';
import { SearchService } from "./search/searchservice";
import { AppComponent } from './app.component';
import { PopularMovies } from './movies/PopularMovies/PopularMovies';
import { LastMovies } from './movies/LastMovies/LastMovies';
import {SearchComponent} from "./search/search.component";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesDetailService } from './movies/movies-detail/movies-detailservice';
import{ LastActorsComponent } from './actors/last-actors-component/last-actors-component.component'
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
    SearchComponent
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
  providers: [ LastMovieService, PopularMoviesService, MoviesDetailService,SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
