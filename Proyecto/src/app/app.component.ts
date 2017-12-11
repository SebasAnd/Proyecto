import { Component } from '@angular/core';

import { LastMovieService } from './LastMovies/LastMoviesService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private Slidertop: Promise<any>;
  private resultSlidertop: JSON[];
  private errSlidertop: any;

  private details: Promise<any>;
  private detail: any[];
  private err: any;
  ngOnInit() {

  }
  constructor (private appserviceslider : LastMovieService ) {


    this.Slidertop = appserviceslider.getMoviesNowPlaying();

    this.Slidertop.then(
      (val: any) => {
        this.resultSlidertop = val;
      }).catch(
      (err: any) => {
        this.errSlidertop = err;
      }
    );


  }

}
