import {Component} from '@angular/core';
import {Automoviles} from './automoviles';
@Component({
  selector: 'app-automoviles-list',
  templateUrl: './automoviles-list.component.html',
  styleUrls: ['./automoviles-list.component.css']
})
export class AutomovilesListComponent {
  automoviles : Automoviles []=[{
    marca :"Chevrolet",
    modelo :"Cruze",
    anio : 2022,
    color :"Negro",
    patente :"AF256KP",
    licencia : 13265236,
  },
  {
    marca :"Ford",
    modelo :"Cruze",
    anio : 2022,
    color :"Blanco",
    patente :"AF123PK",
    licencia : 15326589,
  },
  {
    marca :"Audi",
    modelo :"A4",
    anio : 2000,
    color :"Gris",
    patente :"GHJ126",
    licencia : 23569852,
  }
]
constructor() { }
}
