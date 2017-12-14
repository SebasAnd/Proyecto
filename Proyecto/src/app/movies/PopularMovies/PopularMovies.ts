import { Component , OnInit} from '@angular/core';

import { PopularMoviesService } from './PopularMoviesService';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './PopularMovies.html',
  styleUrls: ['./PopularMovies.css']
})
export class PopularMovies implements OnInit{
  title = 'app';
  private Popular: Observable<any>;
  private movies : JSON[];
  private error: any;

  ngOnInit(){

    this.getPopular();

  }


  constructor (private appservice: PopularMoviesService){


  }

  getPopular(){

    this.appservice.getPopularMovies()
      .subscribe(movie => {
        this.movies = movie['results'];
        console.log(this.movies);
      });
  }
}
