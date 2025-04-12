import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Viajes } from './viajes-list/viajes';

const URL='https://6382b8886e6c83b7a985b4dc.mockapi.io/api/v1/viajes_compartidos';
@Injectable({
  providedIn: 'root'
})
export class ViajeDataService {

  constructor(private htttp: HttpClient) {}

    public getAll() : Observable<Viajes[]> {
      //consume la api
      //es como hacer el fetch('url',{method:'GET'})
      return this.htttp.get<Viajes[]>(URL)
      .pipe(
        tap((viajes: Viajes[])=>viajes.forEach(viaje=>viaje.quantity=0))
        ); //devuelve el observable. El pipe sirve para transformar
    }

}
