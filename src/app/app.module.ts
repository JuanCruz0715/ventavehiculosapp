import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListavehiculosComponent } from './listavehiculos/listavehiculos.component';
import { DetallevehiculosComponent } from './detallevehiculos/detallevehiculos.component';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListavehiculosComponent,
    DetallevehiculosComponent
  ],
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
