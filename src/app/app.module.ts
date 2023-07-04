import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListavehiculosComponent } from './listavehiculos/listavehiculos.component';
import { DetallevehiculosComponent } from './detallevehiculos/detallevehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListavehiculosComponent,
    DetallevehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
