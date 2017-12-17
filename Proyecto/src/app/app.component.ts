import { Component, OnInit} from '@angular/core';
import{ Router } from "@angular/router";
import { LastMovieService } from './movies/LastMovies/LastMoviesService';
import { SearchService } from "./search/searchservice";
import "@angular/router";
import {Observable} from "rxjs/Observable";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  private Slidertop: Promise<any>;
  private resultSlidertop: JSON[];
  private errSlidertop: any;

  private details: Promise<any>;
  private results: {};
  private router: Router;
  private link : string;
  private test: boolean;

  private err: any;
  ngOnInit() {



    this.getSlideMovies();
    this.doSearch();


  }
  constructor (private appserviceslider : LastMovieService, private appsearch : SearchService) {





  }

  getSlideMovies(){


    this.appserviceslider.getMoviesNowPlaying()
      .subscribe(resultSlidertop => {this.resultSlidertop = resultSlidertop['results'] })
  }
*

  doSearch() {

  let searchField = document.querySelector('input');
  Observable.fromEvent(searchField, 'input')
    .pluck('target', 'value')
    .filter( (searchText: string) => { return searchText.length > 2} )
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap( (searchText: string) => {this.link = searchText;

      return this.appsearch.getSearchProduct(searchText)
        .pluck('data', 'results');

    }
  ).subscribe(
    {
      next: results => { this.results = results;  },
      error: err => { this.results = [] },
      complete: () => {}
    }
  );

  }


  handleinput(valor:string){

      this.link = valor;
  }



}
