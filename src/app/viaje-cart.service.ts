import { Injectable } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
import { Viajes } from './viajes-list/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajeCartService {

  cartList: Viajes[]=[];
  constructor() { }

  addToCart(viaje: Viajes) {
    let item=this.cartList.find((v1)=>v1.salida==viaje.salida);
    if(!item){
      this.cartList.push({... viaje});
    }
    else{
      item.quantity += viaje.quantity;
    }
    
  }

   
}
