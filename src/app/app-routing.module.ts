import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallevehiculosComponent } from './detallevehiculos/detallevehiculos.component';
import { ListavehiculosComponent } from './listavehiculos/listavehiculos.component';

const routes: Routes = [
  { path: '', component: ListavehiculosComponent },
  { path: 'detalle/:id', component: DetallevehiculosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
