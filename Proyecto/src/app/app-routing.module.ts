import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { LastMovies } from './LastMovies/LastMovies';

const routes: Routes = [
  {path: '', redirectTo: 'InCines', pathMatch: 'full'},
  {path: 'InCines', component: LastMovies},
  {path: 'Popular', component: PopularMovies}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ]
,
declarations: []
})
export class AppRoutingModule { }
