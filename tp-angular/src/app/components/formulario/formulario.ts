import { Component } from '@angular/core';
import { Inscripcion } from '../../model/inscripcion';
import { InscripcionService } from '../../servicios/inscripcion-service';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, DatePipe, NgSwitch } from '@angular/common';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf, NgSwitch, DatePipe, CurrencyPipe],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  inscripcion: any = {
    dni: '',
    precio: 0,
    categoriaAlumno: 0,
    fechaInscripcion: new Date(),
    email: '',
    curso: '',
  };
  precioCalculado: number | null = null;

  constructor(private inscripcionService: InscripcionService) {}

  get listaInscripciones() {
    return this.inscripcionService.getInscripciones();
  }

  get resumen() {
    return this.inscripcionService.obtenerResumen();
  }

  onCambioDatos() {
    if (this.inscripcion.precio > 0 && this.inscripcion.categoriaAlumno > 0) {
      this.precioCalculado = this.inscripcionService.calcularPrecioFinal(
        this.inscripcion.precio,
        this.inscripcion.categoriaAlumno,
      );
    } else {
      this.precioCalculado = null;
    }
  }

  registrar() {
    const nueva = {
      ...this.inscripcion,
      fechaInscripcion: new Date(),
      precioFinal: this.precioCalculado,
    };

    this.inscripcionService.agregarInscripcion(nueva);

    this.inscripcion = {
      dni: '',
      precio: 0,
      categoriaAlumno: 0,
      fechaInscripcion: new Date(),
      email: '',
      curso: '',
    };
    this.precioCalculado = null;
  }
}
