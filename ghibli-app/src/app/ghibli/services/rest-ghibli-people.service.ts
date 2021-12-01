import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';
import { PeopleResponse } from '../models/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestGhibliPeopleService {
  public urlPeople: string = "https://ghibliapi.herokuapp.com/people";
  constructor(private http: HttpClient) { }

  public getPeople()
  {
    return this.http.get<PeopleResponse[]>(this.urlPeople).pipe(
      map((resp: PeopleResponse[]) => {
        return resp.map( character => Character.peopleFromJSON(character))
      })
    );
  }

  public getCharacterFromId(id: string) {
    return this.http.get<PeopleResponse>(this.urlPeople+"/"+id).pipe(
      map( (character: PeopleResponse) => {
        return Character.peopleFromJSON(character)
      })
    );
  }

}
