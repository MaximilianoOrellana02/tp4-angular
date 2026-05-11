import { NgClass, NgIf } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {
  cards: Card[] = [
    { id: 1, isFlipped: false, isMatched: false, nombre: 'card1', src: 'https://www.shutterstock.com/image-vector/cute-3d-vector-rocket-blasting-600nw-2652727283.jpg' },
    { id: 2, isFlipped: false, isMatched: false, nombre: 'card1', src: 'https://www.shutterstock.com/image-vector/cute-3d-vector-rocket-blasting-600nw-2652727283.jpg'  },

    { id: 3, isFlipped: false, isMatched: false, nombre: 'card2', src: 'https://img.magnific.com/vector-gratis/estilo-redondo-suave-lapiz_78370-7571.jpg?semt=ais_hybrid&w=740&q=80'  },
    { id: 4, isFlipped: false, isMatched: false, nombre: 'card2', src: 'https://img.magnific.com/vector-gratis/estilo-redondo-suave-lapiz_78370-7571.jpg?semt=ais_hybrid&w=740&q=80'  },

    { id: 5, isFlipped: false, isMatched: false, nombre: 'card3', src: 'https://img.magnific.com/vector-premium/ilustracion-icono-dibujos-animados-fruta-manzana_995200-25114.jpg?semt=ais_hybrid&w=740&q=80'  },
    { id: 6, isFlipped: false, isMatched: false, nombre: 'card3', src: 'https://img.magnific.com/vector-premium/ilustracion-icono-dibujos-animados-fruta-manzana_995200-25114.jpg?semt=ais_hybrid&w=740&q=80'  },

    { id: 7, isFlipped: false, isMatched: false, nombre: 'card4', src: 'https://img.magnific.com/vector-gratis/hermosa-casa_24877-50819.jpg?semt=ais_hybrid&w=740&q=80'  },
    { id: 8, isFlipped: false, isMatched: false, nombre: 'card4', src: 'https://img.magnific.com/vector-gratis/hermosa-casa_24877-50819.jpg?semt=ais_hybrid&w=740&q=80'  },

    { id: 9, isFlipped: false, isMatched: false, nombre: 'card5', src: 'https://img.magnific.com/vector-premium/diseno-ilustraciones-vectoriales-arte-clips-arboles_1221743-12265.jpg?semt=ais_hybrid&w=740&q=80'  },
    { id: 10, isFlipped: false, isMatched: false, nombre: 'card5', src: 'https://img.magnific.com/vector-premium/diseno-ilustraciones-vectoriales-arte-clips-arboles_1221743-12265.jpg?semt=ais_hybrid&w=740&q=80'  },

    { id: 11, isFlipped: false, isMatched: false, nombre: 'card6', src: 'https://static.vecteezy.com/system/resources/previews/002/703/018/non_2x/soccer-ball-sport-cartoon-in-black-and-white-free-vector.jpg'  },
    { id: 12, isFlipped: false, isMatched: false, nombre: 'card6', src: 'https://static.vecteezy.com/system/resources/previews/002/703/018/non_2x/soccer-ball-sport-cartoon-in-black-and-white-free-vector.jpg'  },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  flippedCards: Card[] = [];

  juegoIniciado: boolean = false;
  juegoTerminado: boolean = false;
  intentosMaximos: number = 10;
  intentosRestantes: number = 10;
  puedeVoltear: boolean = false;
  mensajeFinal: string = '';

  iniciarJuego() {
    this.juegoIniciado = true;
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.intentosRestantes = this.intentosMaximos;
    this.juegoTerminado = false;
    this.puedeVoltear = false;
    this.mensajeFinal = '';
    this.flippedCards = [];

    this.cards.forEach((c) => {
      c.isFlipped = false;
      c.isMatched = false;
    });

    this.cards = this.mezclarCartas([...this.cards]);
  }

  mezclarCartas(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  habilitarIntento() {
    if (this.juegoIniciado && !this.juegoTerminado && this.flippedCards.length === 0) {
      this.puedeVoltear = true;
    }
  }

  bloqueandoTablero: boolean = false; 

  toggleFlip(card: Card) {
    if (
      !this.juegoIniciado ||
      this.juegoTerminado ||
      !this.puedeVoltear ||
      card.isFlipped ||
      card.isMatched ||
      this.bloqueandoTablero
    ) {
      return;
    }

    card.isFlipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.puedeVoltear = false;
      this.bloqueandoTablero = true; 

      if (this.flippedCards[0].nombre === this.flippedCards[1].nombre) {
        
        this.flippedCards[0].isMatched = true;
        this.flippedCards[1].isMatched = true;
        this.flippedCards = [];
        this.bloqueandoTablero = false; 
        this.verificarGanador();
      } else {
        this.intentosRestantes--;

        const carta1 = this.flippedCards[0];
        const carta2 = this.flippedCards[1];

        this.flippedCards = [];

        setTimeout(() => {
          carta1.isFlipped = false;
          carta2.isFlipped = false;

          this.bloqueandoTablero = false; 
          this.verificarDerrota();

          this.cdr.detectChanges();
        }, 1000);
      }
    }
  }

  verificarGanador() {
    const todasEmparejadas = this.cards.every((c) => c.isMatched);
    if (todasEmparejadas) {
      this.juegoTerminado = true;
      this.mensajeFinal = '¡Victoria! Has descubierto todo el tablero.';
    }
  }

  verificarDerrota() {
    if (this.intentosRestantes <= 0) {
      this.juegoTerminado = true;
      this.mensajeFinal = '¡Derrota! Te has quedado sin intentos.';
      this.cards.forEach((c) => (c.isFlipped = true));
    }
  }
}

export interface Card {
  id: number;
  isFlipped: boolean;
  isMatched: boolean;
  nombre: string;
  src:string;
}
