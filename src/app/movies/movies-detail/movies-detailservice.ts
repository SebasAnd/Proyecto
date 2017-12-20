import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';



import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";




@Injectable()

export class MoviesDetailService {

  private theMovieDbUrl = 'https://api.themoviedb.org/3/';

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';



  constructor(private http: Http) { }

  getMoviedetail(id: number): Observable<any> {
    let discover = this.theMovieDbUrl+ 'movie/'+id+'?api_key=8230c7ea8cb40f6fd40f8851a920b7bf&append_to_response=videos';


    return this.http
      .get(discover)
      .map( response => response.json());

  }



  getMovieTrailer(id: number): Observable<any> {

    let discover =this.theMovieDbUrl+ 'movie/'+id+'/videos'+'?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';


    console.log(discover);
    return this.http
      .get(discover)
      .map( response => response.json());


  }

}
