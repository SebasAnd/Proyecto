import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import {Observable} from "rxjs/Observable";
import {ActorsDetailService} from "./actors-detailservice";



@Component({
  selector: 'app-actors-detaill',
  templateUrl: './actors-detail.component.html',
  styleUrls: ['./actors-detail.component.css']
})
export class ActorsDetailComponent implements OnInit {

  private details: Observable<any>;
  private detail: any[];
  private err: any;

  private detailstrailer: Observable<any>;
  private known : any[];
  private errtrailer: any;
  public trustedDashboardUrl: SafeUrl;
  videoURL: string;


  private router: Router;
  private Slidertop: Promise<any>;
  private resultSlidertop: any[];
  private errSlidertop: any;



  constant : string;

  @Input() movie: any[];

  constructor(private actorService: ActorsDetailService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,) {
  }

  ngOnInit() {

    //this.getTrailers();
    this.getMovie();
    this.redirect();
  }
  redirect(){
    this.route.params.subscribe((params)=> {
      this.actorService.getActorDetail(params.id).subscribe(
        {
          next: actor => { this.detail = actor;
            this.known = actor.known_for;


          },

        }
      );
      this.actorService.getCast(params.id).subscribe(
        {
          next: actor => { this.known = actor;
            this.known = actor;


          },

        }
      );


    });
  }
  getMovie(): void {
    this.constant = "https://image.tmdb.org/t/p/w780/";
    const id = +this.route.snapshot.paramMap.get('id');
    this.actorService.getActorDetail(id)
      .subscribe(actors => {this.detail = actors;

        this.known = actors.known_for;

        }
      );
    this.actorService.getCast(id).subscribe(
      actor => { this.known = actor;
          this.known = actor;}


      );

  }


  test(numb: number):string{
    return  this.constant + numb;

  }

}
