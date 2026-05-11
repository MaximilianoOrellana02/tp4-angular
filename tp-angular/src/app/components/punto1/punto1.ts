import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  eventos: Evento[] = [
    {
      id: 1,
      nombre: 'Taller de Yoga',
      desc: 'La Municipalidad de San Salvador de Jujuy a través de la Dirección General de Deportes invita a toda la comunidad a participar de las Clases de Yoga que se dictarán  a partir del día martes 5 de marzo.',
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkXvEtVYibmgei_kcasyWmynPVLsQKCWAWYIM6IukF1r4vOtU84FF8n8eYOLm5V_4Aqe85OJ3IBUZ-ys9s7HltrRsoCiT_06gKEA0u7l3BTtemq6xDxGDL8s00C0Z1lf_fHIeZs41s2ibE/s1600/Yoga.jpg',
    },
    {
      id: 2,
      nombre: 'Juntada Therian',
      desc: 'Una juntada gamer es un evento de encuentro para entusiastas de los videojuegos, que abarca desde reuniones sociales con amigos para jugar FIFA, PES o clásicos retro, hasta grandes eventos organizados con torneos y tecnología de punta. ',
      src: 'https://www.sol915.com.ar/wp-content/uploads/2026/02/therian.jpg',
    },
    {
      id: 3,
      nombre: 'La noche de la Pizza y Empanada',
      desc: 'Es el evento gastronómico más importantes del año porque la Pizza y Empanada tienen un lugar muy especial en el corazón de todos los argentinos. Queremos que este día todos puedan disfrutarlas. Seguinos y no te pierdas de nada.',
      src: 'https://lanochedelapizzaylaempanada.com.ar/images/site/home-logo-2025.png',
    }
  ];

  index = 0;

  siguiente() {
    this.index++;
    if (this.index >= this.eventos.length) {
      this.index = 0;
    }
  }

  anterior() {
    this.index--;

    if (this.index < 0) {
      this.index = this.eventos.length - 1;
    }
  }
}

interface Evento {
  id: number;
  nombre: string;
  desc: string;
  src: string;
}
