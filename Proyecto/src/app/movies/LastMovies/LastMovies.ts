import { Component,OnInit,Input } from '@angular/core';

import { LastMovieService } from './LastMoviesService';
import { IPageChangeEvent } from '@covalent/core';
import {Observable} from "rxjs/Observable";
import {consoleTestResultsHandler} from "tslint/lib/test";





@Component({
  selector: 'app-lastmovie',
  templateUrl: './LastMovies.html',
  styleUrls: ['./LastMovies.css'],
  providers: [ LastMovieService]
})
export class LastMovies implements OnInit{
  title = 'app';

  control_page: IPageChangeEvent;

  private Incines: Observable<any>;
  movies: any[];
  private err: any;


  private Slidertop: Observable<any>;
  private resultSlidertop: any[];
  private errSlidertop: any;

  ngOnInit(){

    this.getPlayingMovies();
    this.getSlideMovies();


  }


  constructor (private appservice: LastMovieService){



  }

  getPlayingMovies(){

    if (this.control_page == undefined){

      this.appservice.getMoviesNowPlaying()
        .subscribe(movie => {
          this.movies = movie['results'];
          console.log(this.movies);
        });
    }
    else{

      console.log(this.control_page.page);
      this.appservice.getMoviesNowPlaying(this.control_page.page)
        .subscribe(movie => {
          this.movies = movie['results'];
          console.log(this.movies);
        });
    }

}


getSlideMovies(){


    this.appservice.getMoviesNowPlaying()
      .subscribe(resultSlidertop => {this.resultSlidertop = resultSlidertop['results'] })
}

  changeInput(event: IPageChangeEvent): void {
    this.control_page = event;
  }


}
