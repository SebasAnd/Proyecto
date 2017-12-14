///<reference path="../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MoviesDetailService } from './movies-detailservice';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  private details: Observable<any>;
  private detail: any[];
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

  @Input() movie: any[];

  constructor(private movieService: MoviesDetailService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,) {
  }

  ngOnInit() {

    //this.getTrailers();
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMoviedetail(id)
      .subscribe(movie => {this.detail = movie;
        console.log(this.detail);
        this.trailer = movie.videos['results'][0];
        this.videoURL = 'https://www.youtube.com/embed/' + this.trailer.key;
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL)}
      );





    console.log();
    /*this.movieService.getMovie(id)
      .subscribe(movie => {this.movie = movie; } );*/
  }

  getTrailers(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieTrailer(id)
      .subscribe(movie => {
        this.trailer = movie['results'][0];;
        this.videoURL = 'https://www.youtube.com/embed/' + this.trailer.key;
      });
  }

}
