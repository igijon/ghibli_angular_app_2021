import { Component, OnInit } from '@angular/core';
import { RestGhibliLocationsService } from 'src/app/ghibli/services/rest-ghibli-locations.service';
import { Location } from 'src/app/ghibli/models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  public locations: Location[] = [];
  constructor(private restLocationsService: RestGhibliLocationsService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  public getLocations() {
    this.restLocationsService.getLocation().subscribe((response) => {
      this.locations = response;
    });
  }

}
