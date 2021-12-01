import { FilmResponse } from "./req-resp";

export class Film {
  static filmFromJSON(obj: FilmResponse) {
    return new Film(
      obj['id'],
      obj['title'],
      obj['original_title'],
      obj['original_title_romanised'],
      obj['image'],
      obj['movie_banner'],
      obj['description'],
      obj['director'],
      obj['producer'],
      obj['release_date'],
      obj['running_time'],
      obj['rt_score'],
      obj['people'],
      obj['species'],
      obj['locations'],
      obj['vehicles'],
      obj['url'],
      '../../assets/filmDefault.jpeg' //Esto de momento lo dejamos fijo, posteriormente como el API no nos lo proporciona, lo cargaremos de otro API,
    )
  }

  constructor(
    public id: string,
    public title: string,
    public original_title: string,
    public original_title_romanised: string,
    public image: string,
    public movie_banner: string,
    public description: string,
    public director: string,
    public producer: string,
    public release_date: string,
    public running_time: string,
    public rt_score: string,
    public people: string[],
    public species: string[],
    public locations: string[],
    public vehicles: string[],
    public url: string,
    public img: string
  ) {}

  get originalFullTitle() {
    return this.original_title + ' - ' + this.original_title_romanised;
  }
}
