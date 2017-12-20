import { Component,OnInit,Input } from '@angular/core';

import {LastActorsService} from "./last-actors-componentservice";
import { IPageChangeEvent } from '@covalent/core';
import {Observable} from "rxjs/Observable";
import {consoleTestResultsHandler} from "tslint/lib/test";





@Component({
  selector: 'app-last-actors-component',
  templateUrl: './last-actors-component.component.html',
  styleUrls: ['./last-actors-component.component.css'],
  providers: [ LastActorsService]
})
export class LastActorsComponent implements OnInit{
  title = 'app';

  public control_page: IPageChangeEvent;

  private Incines: Observable<any>;
  public actors: any[];
  private err: any;


  private Slidertop: Observable<any>;
  private resultSlidertop: any[];
  private errSlidertop: any;

  ngOnInit(){

   this.getActors();


  }


  constructor (private appservice: LastActorsService){



  }

  getActors(){



    this.appservice.getPopularActors()
      .subscribe(actors => {
        this.actors = actors;

      });





  }




  changeInput(event: IPageChangeEvent): void {
    this.control_page = event;

    this.changePage();
  }


  changePage(){


    this.appservice.getPopularActors(this.control_page.page)
      .subscribe(actors => {
        this.actors = actors;
      });

  }
}
