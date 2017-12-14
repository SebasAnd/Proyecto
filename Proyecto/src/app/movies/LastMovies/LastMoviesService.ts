import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Observable";


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()

export class LastMovieService {

  private theMovieDbUrl = 'http://api.themoviedb.org/3/';

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';





  constructor(private http: Http) { }

  getMoviesNowPlaying(page? : number) : Observable<any> {
    let discover =this.theMovieDbUrl+ 'movie/now_playing'+'?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';

    if(page)
    {
     discover +=  "&page="+page;
    } else  {

    }
    console.log(discover);
      return this.http
        .get(discover)
        .map( response => response.json());


  }



  private handleError(error: any): Promise<any> {

    console.error('An error occurred', error); // for demo purposes only

    return Promise.reject(error.message || error);

  }





}
