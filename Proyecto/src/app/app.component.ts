import { Component } from '@angular/core';

import { LastMovieService } from './movies/LastMovies/LastMoviesService';



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


    this.getSlideMovies()


  }
  constructor (private appserviceslider : LastMovieService ) {





  }

  getSlideMovies(){


    this.appserviceslider.getMoviesNowPlaying()
      .subscribe(resultSlidertop => {this.resultSlidertop = resultSlidertop['results'] })
  }



}
