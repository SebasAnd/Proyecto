///<reference path="../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MoviesDetailService } from './movies-detailservice';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  private details: Promise<any>;
  private detail: any[];
  private err: any;

  private detailstrailer: Promise<any>;
  private trailer: any[];
  private errtrailer: any;
  public trustedDashboardUrl : SafeUrl;
  videoURL: string;


  private router: Router;
  private Slidertop: Promise<any>;
  private resultSlidertop: any[];
  private errSlidertop: any;



  /*constructor (){

  private id : number,private appservice: MoviesDetailService,private appserviceslider : MoviesDetailService


 this.Slidertop = appserviceslider.getMoviesNowPlaying();

 this.Slidertop.then(
   (val:any) => {this.resultSlidertop = val ;}).catch(

   (err :any) => {this.errSlidertop = err;}
 );


} */

  @Input() movie: any[];

  constructor(private movieService: MoviesDetailService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              ) {
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.details = this.movieService.getMoviedetail(id);
    this.details.then(
      (val: any) => {this.detail = val ; }).catch(

      (err: any) => {this.err = err; }
    );


    this.Slidertop = this.movieService.getMoviesNowPlaying();

    this.Slidertop.then(
      (val:any) => {this.resultSlidertop = val ; }).catch(

      (err :any) => {this.errSlidertop = err; }
    );
    this.detailstrailer = this.movieService.getMovieTrailer(id);
    this.detailstrailer.then(
      (val: any) => {this.trailer = val ; this.videoURL = 'https://www.youtube.com/embed/' + val.results[0].key;
        this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL); }).catch(

      (err: any) => {this.errtrailer = err; }
    );



    console.log();
    /*this.movieService.getMovie(id)
      .subscribe(movie => {this.movie = movie; } );*/
  }






}
