import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public title : string;
  public imgGhibli: string;

  constructor() {
    this.title="Ghibli App";
    this.imgGhibli="./assets/studio_ghibli.png";
  }

  ngOnInit(): void {
  }

}
