import {Component} from '@angular/core';
import {Viajes} from './viajes';
@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent {
      viajes : Viajes []=[{
      salida: "Mar del Plata",
      destino:"Tandil",
      dia: "22/12/2022",
      horario:"11:00",
      lugares: 2,
      mascota:"perro/a",
      precio: 1200,
      disponible: false,
      images:"assets/img/viaje1.jpg",
      reserva: 0,
  },
  {
    salida: "Tandil",
    destino:"San Alberto",
    dia: "28/12/2022",
    horario:"08:00",
    lugares: 3,
    mascota:"ninguna",
    precio: 2300,
    disponible: true,
    images:"assets/img/viaje1.jpg",
    reserva: 0,
  },
  {
    images:"assets/img/viaje1.jpg",
    salida: "Mar del Plata",
    destino:"Azul",
    dia: "28/01/2023",
    horario:"06:00",
    lugares: 1,
    mascota:"ninguna",
    precio: 1300,
    disponible: false,
    reserva: 0,
  },
]
ngOnInit():void{
}

}
