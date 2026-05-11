TP: Programación y Servicios Web - Angular
Este proyecto fue desarrollado para la cátedra de Programación y Servicios Web de la Facultad de Ingeniería (UNJU). El objetivo principal es poner en práctica conceptos fundamentales del framework Angular, tales como routing, componentes, binding, directivas estructurales (ngIf, ngFor), pipes y servicios.
👥 Integrantes:
Orellana Cristian Maximiliano
Noemí Ayelen Saravia
Dario Abel Martinez
Christian Guari 
Mateo Alberto Alvarez 

Descripción del Proyecto
La aplicación está organizada mediante un sistema de Rutas (Routing) que permite acceder a los diferentes puntos solicitados a través de un menú de navegación principal. Se utilizó Bootstrap para garantizar un diseño responsivo y moderno en toda la interfaz.
Secciones Principales:
Parte 1: Componentes y Lógica de Interfaz
Punto 1 - Slide Personalizado: Un carrusel interactivo que muestra una lista de eventos con imágenes y descripciones. La navegación se gestiona mediante botones para avanzar y retroceder entre los objetos del array definido en el controlador. 
Punto 2 - Catálogo de Productos y Carrito: Una lista de productos destacados presentados en formato de "Cards". Incluye la funcionalidad de agregar productos a un carrito de compras y visualizar el detalle junto al TOTAL a abonar mediante un modal de Bootstrap.  
Punto 3 - Juego de Memoria: Un juego interactivo de 12 elementos (6 parejas) ubicadas aleatoriamente. Cuenta con estados de "Inicio" y "Reinicio", sistema de intentos limitados y detección de clics para validar coincidencias.  
Parte 2: Servicios y Gestión de Datos
Sistema de Inscripción a Cursos: Una plataforma que gestiona el registro de alumnos mediante un formulario y un Servicio de Angular para las operaciones CRUD.  
Lógica de Negocio: El sistema aplica descuentos automáticos según la categoría: 35% para estudiantes y 50% para egresados.  
Visualización: Los datos se muestran en una tabla (datatable) y una sección de resumen por categoría, utilizando Pipes para formatear fechas y precios.  

🛠️ Requisitos Previos
Antes de ejecutar el proyecto, asegúrate de tener instalado:
Node.js (Versión LTS recomendada).
Angular CLI (Instalable mediante npm install -g @angular/cli).}

🚀 Instrucciones para la Ejecución
Siga estos pasos para levantar el proyecto en su entorno local:
1. Clonar el repositorio o extraer el archivo ZIP: cd path/to/proyecto-angular
2. Instalar las dependencias:
Ejecute el siguiente comando para descargar todos los paquetes necesarios (incluyendo Bootstrap): npm install
3. Iniciar el servidor de desarrollo: ng serve
4. Acceder a la aplicación:
Una vez que el comando finalice, abra su navegador y diríjase a:
http://localhost:4200/

🛠️ Tecnologías Utilizadas
Angular (Framework principal)
TypeScript (Lógica de componentes y servicios)
Bootstrap 5 (Maquetación y estilos)
HTML5 & CSS3
