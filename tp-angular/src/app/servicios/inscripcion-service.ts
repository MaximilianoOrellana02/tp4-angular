import { Injectable } from '@angular/core';
import { Inscripcion } from '../model/inscripcion';

@Injectable({
  providedIn: 'root',
})

export class InscripcionService {
  private listaInscripciones: Inscripcion[] = [];

  agregarInscripcion(inscripcion: Inscripcion) {
    this.listaInscripciones.push(inscripcion);
  }

  getInscripciones() :Inscripcion[] {
    return this.listaInscripciones;
  }

  calcularPrecioFinal(precio: number, categoria: number): number {
    let descuento = 0;
    if(categoria == 1) descuento = 0.35;
    else if (categoria == 2) descuento = 0.50;

    return precio * (1 - descuento);
  }

  //Obtener resumen
  obtenerResumen() {
    const totalEstudiantes = this.listaInscripciones.filter(i => i.categoriaAlumno == 1).length;
    const totalEgresados = this.listaInscripciones.filter(i => i.categoriaAlumno == 2).length;
    const totalParticulares = this.listaInscripciones.filter(i => i.categoriaAlumno == 3).length;

    const totalGeneral = this.listaInscripciones.reduce((acumulador, actual) => acumulador + (actual.precioFinal || 0), 0);

    return { totalEstudiantes, totalEgresados, totalParticulares, totalGeneral };
  }
}
