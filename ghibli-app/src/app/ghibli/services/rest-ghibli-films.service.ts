import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import { FilmResponse } from '../models/req-resp';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestGhibliFilmsService {
  public urlFilms: string = "https://ghibliapi.herokuapp.com/films";
  constructor(private http: HttpClient) { }

  public getFilms()
  {
    return this.http.get<FilmResponse[]>(this.urlFilms).pipe(
      map((resp: FilmResponse[]) => {
        return resp.map( film => Film.filmFromJSON(film))
      })
    );
  }
}
