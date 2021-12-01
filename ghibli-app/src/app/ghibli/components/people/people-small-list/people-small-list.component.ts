import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/ghibli/models/character';
import { GhibliDataService } from 'src/app/ghibli/services/ghibli-data.service';

@Component({
  selector: 'app-people-small-list',
  templateUrl: './people-small-list.component.html',
  styleUrls: ['./people-small-list.component.scss'],
})
export class PeopleSmallListComponent implements OnInit {
  @Input() public people: Character[] = [];

  constructor(
    private modal: NgbModal,
    private activeModal: NgbActiveModal,
    private ghibliDataService: GhibliDataService
  ) {}

  ngOnInit(): void {}

}
