import { Gender, PeopleResponse } from "./req-resp";

export class Character {
  static peopleFromJSON(obj: PeopleResponse) {
    return new Character(
      obj['id'],
      obj['name'],
      obj['gender'],
      obj['age'],
      obj['eye_color'],
      obj['hair_color'],
      obj['films'],
      obj['species'],
      obj['url']
    )
  }

  constructor(
    public id:         string,
    public name:       string,
    public gender:     Gender,
    public age:        string,
    public eye_color:  string,
    public hair_color: string,
    public films:      string[],
    public species:    string,
    public url:        string
  ) {}

}
