import { Injectable, Output, EventEmitter } from '@angular/core';
import { Character } from '../models/character';
import { Film } from '../models/film';
import { RestGhibliFilmsService } from './rest-ghibli-films.service';
import { RestGhibliPeopleService } from './rest-ghibli-people.service';

@Injectable({
  providedIn: 'root'
})
export class GhibliDataService {
  @Output() filmTrigger: EventEmitter<Film> = new EventEmitter();

  constructor(private restPeopleService: RestGhibliPeopleService, private restFilmService: RestGhibliFilmsService) { }

  /**
   * A partir de una url de Ghibli API obtenemos su id, porque es el último
   * token si separamos la cadena opr "/"
   * @param url
   */
  public getId(url: string): string {
    return url.split('/').pop()!;
  }

  /**
   * El API de Ghibli tiene incoherencias en los datos, porque a veces en los datos de una película aparece
   * como listado de personajes, todos. Por tanto, debemos en ese caso, comprobar que el personaje tenga la
   * película como asociada para estar seguros.
   *
   * @param character
   * @param film
   * @returns si está el personaje en la película o no.
   *
   */
   public isCharacterInTheFilm(character: Character, film: Film): boolean {
    let isInTheFilm: boolean = false;
    character.films.forEach((filmCharacter) => {
      let idFilm = this.getId(filmCharacter);
      if (idFilm == film.id) isInTheFilm = true;
    });
    return isInTheFilm;
  }

   /**
   * En algunos casos, en una película, viene como people, una url genérica que devuelve todos los personajes, por eso
   * obtenemos el id y comprobamos en cada personaje que dicho personaje tiene como referencia la película de la que estamos
   * obteniendo los detalles.
   *
   * @param film
   * @returns people
   *
   */
    public getNamePeopleForFilm(film: Film, people: Character[]) {
      if (people.length == 0)
        film.people.forEach((characterUrl) => {
          let id = this.getId(characterUrl).trim();
          if (id?.length == 0)
            this.restPeopleService.getPeople().subscribe((response) => {
              response.forEach((character) => {
                //Para cada personaje de la respuesta comprobaremos si está
                if (this.isCharacterInTheFilm(character, film))
                  people.push(character);
              });
            });
          else
            this.restPeopleService
              .getCharacterFromId(id)
              .subscribe((response) => {
                people.push(response);
              });
        });
    }
}


