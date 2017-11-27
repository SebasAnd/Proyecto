import { Component } from '@angular/core';

import { LastMovieService } from './LastMoviesService/LastMoviesService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private Incines: Promise<any>;
  private result1: JSON;
  private err: any;


  private Slidertop:Promise<any>;
  private resultSlidertop:JSON;
  private errSlidertop: any;


  constructor (private appservice: LastMovieService,private appserviceslider : LastMovieService){

    this.Incines = appservice.getMoviesNowPlaying();
    this.Incines.then(

      ( val: any ) => {this.result1 = val; } ).catch(

      ( err: any ) => {this.err = 'Rejected with an error ' + err.toString(); }
    );

    this.Slidertop = appserviceslider.getMoviesNowPlaying();

    this.Slidertop.then(
        (val:any) => {this.resultSlidertop = val ;}).catch(

        (err :any) => {this.errSlidertop = err;}
        );


  }
}
