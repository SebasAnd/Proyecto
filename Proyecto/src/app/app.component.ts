import { Component } from '@angular/core';

import { LastMovieService } from './LastMoviesService/LastMoviesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private promise1: Promise<any>;

  private result1: JSON;
  private err: any;

  constructor (private appservice: LastMovieService){

    this.promise1 = appservice.getMoviesNowPlaying();
    this.promise1.then(

      ( val: any ) => {this.result1 = val; } ).catch(

      ( err: any ) => {this.err = 'Rejected with an error ' + err.toString(); }
    );

  }
}



