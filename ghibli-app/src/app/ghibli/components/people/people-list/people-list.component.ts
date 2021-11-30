import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/ghibli/models/character';
import { RestGhibliPeopleService } from 'src/app/ghibli/services/rest-ghibli-people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people: Character[] = [];
  constructor(private restPeopleService: RestGhibliPeopleService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  public getPeople() {
    this.restPeopleService.getPeople().subscribe((response) => {
      this.people = response;
    });
  }

}
