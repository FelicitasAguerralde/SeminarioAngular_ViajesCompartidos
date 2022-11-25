import {Component, OnInit} from '@angular/core';
import { ViajeCartService } from '../viaje-cart.service';
import {Viajes} from './viajes';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent implements OnInit{
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
      quantity: 0,
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
    quantity: 0,
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
    quantity: 0,
  },
]
  
  constructor(private cart: ViajeCartService) { 
}

ngOnInit():void{
}

addToCart(viaje: Viajes):void{
  this.cart.addToCart(viaje);
  viaje.lugares -= viaje.quantity;
  viaje.quantity=0;
}
}
