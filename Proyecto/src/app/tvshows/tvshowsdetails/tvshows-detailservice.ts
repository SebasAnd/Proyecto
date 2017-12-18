import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';



import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";




@Injectable()

export class TvshowsDetailservice {

  private theMovieDbUrl = 'http://api.themoviedb.org/3/';

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';



  constructor(private http: Http) { }

  getShowdetail(id: number): Observable<any> {
    let discover = this.theMovieDbUrl+ 'tv/'+id+'?api_key=8230c7ea8cb40f6fd40f8851a920b7bf&append_to_response=videos';


    return this.http
      .get(discover)
      .map( response => response.json());

  }



  getShowTrailer(id: number): Observable<any> {

    let discover =this.theMovieDbUrl+ 'tv/'+id+'/videos'+'?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';


    console.log(discover);
    return this.http
      .get(discover)
      .map( response => response.json());


  }

}
