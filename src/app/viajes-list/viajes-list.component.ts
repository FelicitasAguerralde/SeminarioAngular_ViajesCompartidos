import { Component } from '@angular/core';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent {
  viajes={
    "salida": "Mar del Plata",
    "destino":"Tandil",
    "dia": "22/12/2022",
    "horario":"11:00",
    "lugares": 2,
    "mascota":"perro/a",
    "precio":1200,
    "images":"assets/img/viaje1.jpg",
  }
}
