import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Observable";


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()

export class Tvshowspopularservice {

  private theMovieDbUrl = 'https://api.themoviedb.org/3/';

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';





  constructor(private http: Http) { }

  getPopularTvshows(page? : number) : Observable<any> {
    let discover =this.theMovieDbUrl+ 'tv/popular'+'?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if(page)
    {
     discover +=  "&page="+page;
    } else  {

    }

      return this.http
        .get(discover)
        .map( response => response.json());


  }



  private handleError(error: any): Promise<any> {

    console.error('An error occurred', error); // for demo purposes only

    return Promise.reject(error.message || error);

  }





}
