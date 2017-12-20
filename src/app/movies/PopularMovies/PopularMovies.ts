import { Component , OnInit} from '@angular/core';

import { PopularMoviesService } from './PopularMoviesService';
import {Observable} from "rxjs/Observable";
import {IPageChangeEvent} from "@covalent/core";

@Component({
  selector: 'app-root',
  templateUrl: './PopularMovies.html',
  styleUrls: ['./PopularMovies.css']
})
export class PopularMovies implements OnInit{
  title = 'app';
  public control_page: IPageChangeEvent;
  private Popular: Observable<any>;
  public movies : JSON[];
  private error: any;

  ngOnInit(){

    this.getPopular();

  }


  constructor (private appservice: PopularMoviesService){


  }

  getPopular(){

    this.appservice.getPopularMovies()
      .subscribe(movie => {
        this.movies = movie;

      });
  }


  changeInput(event: IPageChangeEvent): void {
    this.control_page = event;

    this.changePage();
  }


  changePage(){


    this.appservice.getPopularMovies(this.control_page.page)
      .subscribe(movie => {
        this.movies = movie;
      });

  }
}

