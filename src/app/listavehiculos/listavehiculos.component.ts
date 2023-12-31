import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetallevehiculosComponent } from '../detallevehiculos/detallevehiculos.component';

@Component({
  selector: 'app-listavehiculos',
  templateUrl: './listavehiculos.component.html',
  styleUrls: ['./listavehiculos.component.css']
})
export class ListavehiculosComponent {

    vehiculos = [
      { id: 1, tipo: 'auto', marca: 'Toyota', modelo: 'Corolla', imagen: 'assets/images/tc.jpg',},
      { id: 2, tipo: 'moto', marca: 'Honda', modelo: 'Wave',imagen: 'assets/images/hw.jpg' },
      { id: 3, tipo: 'camioneta', marca: 'Ford', modelo: 'F100', imagen: 'assets/images/f100.jpg'}, 
      { id: 4, tipo: 'auto', marca: 'Ford', modelo: 'Focus', imagen: 'assets/images/ff.jpg'},
      { id: 5, tipo: 'cuatriciclo', marca: 'Yamaha', modelo: 'Raptor', imagen: 'assets/images/yr.jpg'},
      { id: 6, tipo: 'moto', marca: 'Zanella', modelo: 'sapucai', imagen: 'assets/images/zs.jpg'},
      { id: 7, tipo: 'auto', marca: 'Chevrolet', modelo: 'Corsa', imagen: 'assets/images/cc.jpg'},
      { id: 8, tipo: 'moto', marca: 'Corven', modelo: 'Triax', imagen: 'assets/images/ct.jpg'},
      { id: 9, tipo: 'camioneta', marca: 'Ford', modelo: 'Maverick', imagen: 'assets/images/fm.jpg'},
      { id: 10, tipo: 'cuatriciclo', marca: 'Honda', modelo: 'TRX',imagen: 'assets/images/ht.jpg'},
    ];

    constructor(private router: Router) {}
    newVehiculoTipo: string = '';
    newVehiculoMarca: string = ''; 
    newVehiculoModelo: string = '';
    
    addVehiculo() {
      const newVehiculo = {id: this.vehiculos.length + 1, tipo: this.newVehiculoTipo, marca: this.newVehiculoMarca, modelo : this.newVehiculoModelo, imagen: "" };
      this.vehiculos.push(newVehiculo);
      this.newVehiculoMarca = '';
      this.newVehiculoModelo = '';
      this.filtrarPorCategoriaVehiculos(this.categoriaElegida); // Se vuelve a aplicar el filtro después de agregar un producto para que se vea reflejado el cambio
    }

  verDetalles(id: number) {
    this.router.navigate(['/detalle', id]);
  }

   categoriaElegida: string = '';
     filtrarPorCategoriaVehiculos(categoria:string) {
      this.categoriaElegida = categoria;
    }

   mostrarVehiculos() {
      this.categoriaElegida = '';
    }

    eliminarVehiculo(id: number) {
      this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.id !== id);
    }

    agregarVehiculo(nuevoVehiculo: any) {
      this.vehiculos.push(nuevoVehiculo);
    }

    agregarNuevoVehiculo() {
      const nuevoVehiculo = {
        id: 11,
        tipo: 'auto',
        marca: 'volkswagen',
        modelo: 'gol',
        imagen: 'assets/images/gl.jpg'
      };
    
      this.agregarVehiculo(nuevoVehiculo);
    }
    
}
    
  
