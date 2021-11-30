import { LocationResponse } from "./req-resp";

export class Location {
  static locationFromJSON(obj: LocationResponse) {
    return new Location(
      obj['id'],
      obj['name'],
      obj['climate'],
      obj['terrain'],
      obj['surface_water'],
      obj['residents'],
      obj['films'],
      obj['url']
    );
  }

  constructor(
    public id:            string,
    public name:          string,
    public climate:       string,
    public terrain:       string,
    public surface_water: string,
    public residents:     string[],
    public films:         string[],
    public url:           string,
  ) {}
}
