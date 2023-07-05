import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListavehiculosComponent } from '../listavehiculos/listavehiculos.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detallevehiculos',
  templateUrl: './detallevehiculos.component.html',
  styleUrls: ['./detallevehiculos.component.css']
})
export class DetallevehiculosComponent implements OnInit {
  vehiculo: any;
  
  constructor(private route: ActivatedRoute,private router: Router) { }

  volver() {
    this.router.navigate(['']); // Cambia '/lista-vehiculos' por la ruta correcta de tu lista de vehículos
  }
  ngOnInit() {
    const vehiculos = [
      { id: 1, tipo: 'auto', marca: 'Toyota', modelo: 'Corolla', imagen: 'assets/images/tc.jpg', anho: 2022, kilometros: 10000, precio: 2500000 },
      { id: 2, tipo: 'moto', marca: 'Honda', modelo: 'Wave', imagen: 'assets/images/hw.jpg', anho: 2021, kilometros: 5000, precio: 150000 },
      { id: 3, tipo: 'camioneta', marca: 'Ford', modelo: 'F100', imagen: 'assets/images/f100.jpg', anho: 2004, kilometros: 20000, precio: 400000 },
      { id: 11, tipo: 'auto', marca: 'volkswagen', modelo: 'gol', imagen: 'assets/images/gl.jpg',anho: 2022, kilometros: 20000, precio: 100000 }
        
        
        
        
    ];

    this.route.paramMap.subscribe(params => { // obtenemos el id
      const id = Number(params.get('id')); // envia el id por url con e params . get obtengo la id de a url

      this.vehiculo = vehiculos.find(v => v.id === id); // Busca el vehículo por ID

      console.log(this.vehiculo);
    });
  }
}
