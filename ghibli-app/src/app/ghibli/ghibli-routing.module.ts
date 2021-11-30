import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { LocationListComponent } from './components/locations/location-list/location-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmListComponent,
  },
  {
    path: 'people',
    component: PeopleListComponent,
  },
  {
    path: 'locations',
    component: LocationListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhibliRoutingModule {}
