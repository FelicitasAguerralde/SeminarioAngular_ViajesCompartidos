import { Component } from '@angular/core';

@Component({
  selector: 'app-automoviles-list',
  templateUrl: './automoviles-list.component.html',
  styleUrls: ['./automoviles-list.component.css']
})
export class AutomovilesListComponent {
  automoviles={
    "marca":"Chevrolet",
    "modelo":"Cruze",
    "anio":"2022",
    "color":"Negro",
    "patente":"AF256KP",
    "licencia":"13265236",
  }
}
