import { NgModule } from '@angular/core';
import { GhibliRoutingModule } from './ghibli-routing.module';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { SharedModule } from '../shared/shared.module';
import { LocationListComponent } from './components/locations/location-list/location-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { FilmDetailComponent } from './components/films/film-detail/film-detail.component';
import { PeopleSmallListComponent } from './components/people/people-small-list/people-small-list.component';


@NgModule({
  declarations: [
    FilmListComponent,
    LocationListComponent,
    PeopleListComponent,
    FilmDetailComponent,
    PeopleSmallListComponent
  ],
  imports: [
    SharedModule,
    GhibliRoutingModule
  ]
})
export class GhibliModule { }
