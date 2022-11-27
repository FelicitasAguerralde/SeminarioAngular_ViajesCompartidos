import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  home = 'Home';
  viajes='Viajes';
  automoviles='Automoviles';
  about='About';
  title= 'Viajes Compartidos';
  footer='@viajes_compartidos'
  cart='Carrito';

}
