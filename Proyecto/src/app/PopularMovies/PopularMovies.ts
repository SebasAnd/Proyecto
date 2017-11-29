import { Component } from '@angular/core';

import { LastMovieService } from '../LastMoviesService/LastMoviesService';

@Component({
  selector: 'app-root',
  templateUrl: './PopularMovies.html',
  styleUrls: ['./PopularMovies.css']
})
export class PopularMovies {
  title = 'app';
  private Popular: Promise<any>;
  private result: JSON;
  private err: any;


  private Slidertop:Promise<any>;
  private resultSlidertop: JSON;
  private errSlidertop: any;


  constructor (private appservice: LastMovieService,private appserviceslider: LastMovieService){

    this.Popular = appservice.getPopularMovies();
    this.Popular.then(

      ( val: any ) => {this.result = val; } ).catch(

      ( err: any ) => {this.err = 'Rejected with an error ' + err.toString(); }
    );

    this.Slidertop = appserviceslider.getMoviesNowPlaying();

    this.Slidertop.then(
        (val: any) => {this.resultSlidertop = val ; }).catch(

        (err: any) => {this.errSlidertop = err ; }
        );


  }
}
