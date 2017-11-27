import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LastMovieService } from './LastMoviesService/LastMoviesService';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ LastMovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


