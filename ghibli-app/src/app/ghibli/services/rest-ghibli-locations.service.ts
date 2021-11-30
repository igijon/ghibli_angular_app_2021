import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { LocationResponse } from '../models/req-resp';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class RestGhibliLocationsService {
  public urlLocations: string = "https://ghibliapi.herokuapp.com/locations";
  constructor(private http: HttpClient) { }

  public getLocation()
  {
    return this.http.get<LocationResponse[]>(this.urlLocations).pipe(
      map((resp: LocationResponse[]) => {
        return resp.map( location => Location.locationFromJSON(location))
      })
    );
  }
}
