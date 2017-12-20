import { Component, OnInit, Input , OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {SearchService} from "../searchservice";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {IPageChangeEvent} from "@covalent/core";


@Component({
  selector: 'app-movies-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {

  private details: Observable<any>;
  private detail: any[];
  public movies: any;
  public control_page: IPageChangeEvent;
  public  searchText : string;
  private busy : any;
  private err: any;

  private detailstrailer: Observable<any>;
  private trailer;
  private errtrailer: any;
  public trustedDashboardUrl: SafeUrl;
  videoURL: string;


  private router: Router;
  private Slidertop: Promise<any>;
  private resultSlidertop: any[];
  private errSlidertop: any;



  constant : string;

  @Input() movie: any[];

  constructor(private appsearch: SearchService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {



    //this.getTrailers();
    this.doSearch();
    this.redirect()


  }

  redirect(){
    this.route.params.subscribe((params)=>{

      this.appsearch.getSearchMovies(params.word).subscribe(
        {
          next: results => { this.movies = results },
          error: err => { this.movies = [] },
          complete: () => {}
        }
      );

    });
  }

  doSearch() {
    this.searchText = "" + this.route.snapshot.paramMap.get('word');
    this.appsearch.getSearchMovies(this.searchText).subscribe(
      {
        next: results => { this.movies = results },
        error: err => { this.movies = [] },
        complete: () => {}
      }
    );
  }




  test(numb: number):string{
    return  this.constant + numb;

  }


  changeInput(event: IPageChangeEvent): void {
    this.control_page = event;

    this.changePage();
  }


  changePage(){

    this.route.params.subscribe((params)=> {
      console.log('updatedParams', params);
      this.appsearch.getSearchMovies(params.word,this.control_page.page).subscribe(
        {
          next: results => { this.movies = results },
          error: err => { this.movies = [] },
          complete: () => {}
        }
      );

    });

  }
}
