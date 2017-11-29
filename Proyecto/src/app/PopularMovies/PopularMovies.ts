import { Component } from '@angular/core';

import { PopularMoviesService } from './PopularMoviesService';

@Component({
  selector: 'app-root',
  templateUrl: './PopularMovies.html',
  styleUrls: ['./PopularMovies.css']
})
export class PopularMovies {
  title = 'app';
  private Popular: Promise<any>;
  private movies: JSON;
  private error: any;


  private Slidertop: Promise<any>;
  private resultSlidertop: JSON;
  private errSlidertop: any;


  constructor (private appservice: PopularMoviesService,private appserviceslider: PopularMoviesService){

    this.Popular = appservice.getPopularMovies();
    this.Popular.then(

      ( val: any ) => {this.movies = val; } ).catch(

      ( err: any ) => {this.error = 'Rejected with an error ' + err.toString(); }
    );

    this.Slidertop = appserviceslider.getMoviesNowPlaying();

    this.Slidertop.then(
        (val: any) => {this.resultSlidertop = val ; }).catch(

        (err: any) => {this.errSlidertop = err ; }
        );


  }
}
