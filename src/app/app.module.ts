import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { AutomovilesListComponent } from './automoviles-list/automoviles-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViajesListComponent,
    AutomovilesListComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
