import { NgModule } from '@angular/core';
import { GhibliRoutingModule } from './ghibli-routing.module';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { SharedModule } from '../shared/shared.module';
import { LocationListComponent } from './components/locations/location-list/location-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';


@NgModule({
  declarations: [
    FilmListComponent,
    LocationListComponent,
    PeopleListComponent
  ],
  imports: [
    SharedModule,
    GhibliRoutingModule
  ]
})
export class GhibliModule { }
