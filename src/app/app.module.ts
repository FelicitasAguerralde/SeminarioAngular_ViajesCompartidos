import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { AutomovilesListComponent } from './automoviles-list/automoviles-list.component';
import { FormsModule } from '@angular/forms';
import { ViajesAboutComponent } from './viajes-about/viajes-about.component';
import { AutomovilesViajesComponent } from './automoviles-viajes/automoviles-viajes.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajesListComponent,
    AutomovilesListComponent,
    ViajesAboutComponent,
    AutomovilesViajesComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
