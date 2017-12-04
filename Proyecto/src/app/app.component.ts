import { Component } from '@angular/core';

import { LastMovieService } from './LastMovies/LastMoviesService';

import { MoviesDetailService } from './movies-detail/movies-detailservice';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    this.getMovie();
  }
  constructor (private appserviceslider : LastMovieService,private movieService ){



    this.Slidertop = appserviceslider.getMoviesNowPlaying();

    this.Slidertop.then(
      (val:any) => {this.resultSlidertop = val ;}).catch(

      (err :any) => {this.errSlidertop = err;}


    );



}

getMovie(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.details = this.movieService.getMoviedetail(id);
  this.details.then(
    (val: any) => {this.detail = val ; }).catch(

    (err: any) => {this.err = err; }
  );



}
