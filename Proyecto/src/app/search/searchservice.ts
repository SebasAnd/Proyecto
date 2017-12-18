import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Observable";


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()

export class SearchService {

  private theMovieDbUrl = 'http://api.themoviedb.org/3/';

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';


  constructor(private http: Http) {
  }

  getSearchProduct(thing?: string,page?: number): Observable<any> {
    let discover = this.theMovieDbUrl + 'search/multi' + '?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if(thing){

      discover += "&query=" + thing;

    }else{


    }

    if (page) {
      discover += "&page=" + page;
    } else {

    }

    return this.http
      .get(discover)
      .map(response => response.json());


  }

  getSearchMovies(thing?: string,page?: number): Observable<any> {
    let discover = this.theMovieDbUrl + 'search/movie' + '?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if(thing){

      discover += "&query=" + thing;

    }else{


    }
    if (page) {
      discover += "&page=" + page;
    } else {

    }

    return this.http
      .get(discover)
      .map(response => response.json());


  }

  getSearchTvshows(thing?: string,page?: number): Observable<any> {
    let discover = this.theMovieDbUrl + 'search/tv' + '?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if(thing){

      discover += "&query=" + thing;

    }else{


    }
    console.log(discover);
    if (page) {
      discover += "&page=" + page;
    } else {

    }

    return this.http
      .get(discover)
      .map(response => response.json());


  }



  getSearchperson(thing?: string,page?: number): Observable<any> {
    let discover = this.theMovieDbUrl + 'search/person' + '?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if(thing){

      discover += "&query=" + thing;

    }else{


    }

    if (page) {
      discover += "&page=" + page;
    } else {

    }

    return this.http
      .get(discover)
      .map(response => response.json());


  }

}
