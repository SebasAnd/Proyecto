import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LastMovieService } from './LastMoviesService/LastMoviesService';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PopularMovies } from './PopularMovies/PopularMovies'

const routes: Routes = [
  {path: '', redirectTo: 'InCines', pathMatch: 'full'},
  {path: 'InCines', component: AppComponent},
  {path: 'Popular', component: PopularMovies}
];


@NgModule({
  declarations: [
    AppComponent,
    PopularMovies
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ LastMovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
