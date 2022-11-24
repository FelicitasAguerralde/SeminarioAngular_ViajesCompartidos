import { Component, Input } from '@angular/core';
import { Viajes } from '../viajes-list/viajes';
@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent {
  @Input() 
  viaje!: Viajes;
  upReserva(viaje: Viajes):void{
    if((viaje.lugares>0)&&(viaje.lugares>viaje.reserva))
    viaje.reserva++;
  }
  downReserva(viaje: Viajes):void{
    if(viaje.reserva>0)
    viaje.reserva--;
  }
  changeReserva(event:any, viaje: Viajes):void{
    
  }
}
