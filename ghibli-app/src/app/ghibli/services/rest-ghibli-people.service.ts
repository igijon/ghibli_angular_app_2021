import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';
import { PeopleResponse } from '../models/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestGhibliPeopleService {
  public urlLocations: string = "https://ghibliapi.herokuapp.com/people";
  constructor(private http: HttpClient) { }

  public getPeople()
  {
    return this.http.get<PeopleResponse[]>(this.urlLocations).pipe(
      map((resp: PeopleResponse[]) => {
        return resp.map( character => Character.peopleFromJSON(character))
      })
    );
  }

}
