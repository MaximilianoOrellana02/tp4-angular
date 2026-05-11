import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {
  productos: Producto[] = [
    {
      nombre: 'Notebook Asus 13L',
      desc: 'Disco 40GB, 15 Pulgadas',
      precio: 100.99,
      img: 'https://www.asus.com/media/Odin/Websites/global/Series/15.png',
    },
    {
      nombre: 'Dualsense PS5',
      desc: 'Compatible con PS5',
      precio: 79.99,
      img: 'https://http2.mlstatic.com/D_870401-MLA93351703978_092025-C.jpg',
    },

    {
      nombre: 'Monitor LG',
      desc: '24 Pulgadas 1080p',
      precio: 89.00,
      img: 'https://http2.mlstatic.com/D_831699-MLA111332758757_052026-C.jpg',
    },
    {
      nombre: 'PC Armada',
      desc: 'Disco 1TB, Intel',
      precio: 499.99,
      img: 'https://cdn.shopify.com/s/files/1/0437/8358/5942/files/PC_GAMER-min.png?v=1762149806',
    },
    {
      nombre: 'Lampara',
      desc: 'Luces LED',
      precio: 10.99,
      img: 'https://acdn-us.mitiendanube.com/stores/004/031/107/products/diseno-sin-titulo-16-a9d1db9da9e6bb2ee717170004705107-1024-1024.webp',
    },
    {
      nombre: 'Pelota Trionda',
      desc: 'Adidas',
      precio: 199.99,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Trionda_%28cropped%29.jpg/330px-Trionda_%28cropped%29.jpg',
    },
  ];

  carrito: Carrito = {
    productos: [],
    total: 0,
  };

  agregarAlCarrito(producto: Producto) {
    //NO AGREGAR PRODUCTOS REPETIDOS
    for (let i = 0; i < this.carrito.productos.length; i++) {
      if (this.carrito.productos[i].nombre == producto.nombre) {
        alert('El producto ya se encuentra en el carrito');
        return;
      }
    }

    this.carrito.productos.push(producto);
    this.carrito.total += producto.precio;
    alert('Producto agregado al carrito');
  }
}

interface Producto {
  nombre: string;
  desc: string;
  precio: number;
  img: string;
}

interface Carrito {
  productos: Producto[];
  total: number;
}
