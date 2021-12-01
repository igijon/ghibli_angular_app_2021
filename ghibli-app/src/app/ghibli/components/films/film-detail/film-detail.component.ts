import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/ghibli/models/character';
import { Film } from 'src/app/ghibli/models/film';
import { GhibliDataService } from 'src/app/ghibli/services/ghibli-data.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  public film: Film | undefined;
  public people: Character[] = [];

  constructor(private modalActive: NgbActiveModal, private ghibliDataService: GhibliDataService) {
    this.ghibliDataService.filmTrigger.subscribe((data: Film) => {
      this.film = data;
      this.ghibliDataService.getNamePeopleForFilm(this.film, this.people);
    })
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalActive.dismiss();
  }

}
