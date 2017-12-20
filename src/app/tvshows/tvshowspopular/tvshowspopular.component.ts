import { Component,OnInit,Input } from '@angular/core';

import {Tvshowspopularservice} from "./tvshowspopularservice";
import { IPageChangeEvent } from '@covalent/core';
import {Observable} from "rxjs/Observable";
import {consoleTestResultsHandler} from "tslint/lib/test";





@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshowspopular.component.html',
  styleUrls: ['./tvshowspopular.component.css'],
  providers: [ Tvshowspopularservice]
})
export class TvshowspopularComponent implements OnInit{
  title = 'app';

  public control_page: IPageChangeEvent;

  private Incines: Observable<any>;
  public shows: any[];
  private err: any;


  private Slidertop: Observable<any>;
  private resultSlidertop: any[];
  private errSlidertop: any;

  ngOnInit(){

    this.getTvShows();


  }


  constructor (private appservice: Tvshowspopularservice){



  }

  getTvShows(){



      this.appservice.getPopularTvshows()
        .subscribe(show => {
          this.shows = show;

        });





}




  changePage(){


    this.appservice.getPopularTvshows(this.control_page.page)
      .subscribe(show => {
        this.shows = show;
      });

  }
}
