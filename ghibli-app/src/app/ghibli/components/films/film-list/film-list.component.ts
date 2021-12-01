import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Film } from 'src/app/ghibli/models/film';
import { GhibliDataService } from 'src/app/ghibli/services/ghibli-data.service';
import { RestGhibliFilmsService } from 'src/app/ghibli/services/rest-ghibli-films.service';
import { FilmDetailComponent } from '../film-detail/film-detail.component';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent implements OnInit {
  public films: Film[] = [];
  constructor(
    private restFilmsService: RestGhibliFilmsService,
    private modal: NgbModal,
    private ghibliDataService: GhibliDataService
  ) {}

  ngOnInit(): void {
    this.getFilms();
  }

  public getFilms() {
    this.restFilmsService.getFilms().subscribe((response) => {
      this.films = response;
    });
  }

  public mostrar(film: Film) {
    this.modal.open(FilmDetailComponent, { size: 'md' });
    this.ghibliDataService.filmTrigger.emit(film);
  }
}
