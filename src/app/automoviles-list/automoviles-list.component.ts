import {Component} from '@angular/core';
import {Automoviles} from './automoviles';
@Component({
  selector: 'app-automoviles-list',
  templateUrl: './automoviles-list.component.html',
  styleUrls: ['./automoviles-list.component.css']
})
export class AutomovilesListComponent {
  automoviles : Automoviles={
    marca :"Chevrolet",
    modelo :"Cruze",
    anio : 2022,
    color :"Negro",
    patente :"AF256KP",
    licencia : 13265236,
  }
}
