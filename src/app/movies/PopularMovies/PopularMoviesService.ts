import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()

export class PopularMoviesService {

  private theMovieDbUrl = 'https://api.themoviedb.org/3/';

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';



  constructor(private http: Http) { }

  getPopularMovies(page? : number) : Observable<any> {
    let discover = this.theMovieDbUrl + 'movie/popular' + '?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if (page) {
      discover += "&page=" + page;
    } else {


    }

    return this.http
      .get(discover)
      .map( response => response.json());
  }
}
