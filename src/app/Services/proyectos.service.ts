import { Injectable } from '@angular/core';
import { Proyecto } from '../Models/proyecto.models';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  
  getProyectos(): Proyecto[] {
    let proyectos: Proyecto[] = [
    {
      nombre: 'Todo App',
      descripcion: 'MyDateApp es una aplicación web de una sola página (SPA) desarrollada con Angular y desplegada en Firebase Hosting, diseñada para proporcionar una experiencia web moderna, interactiva y fluida sin recarga de páginas completas. Está orientada a la interacción de usuarios en un contexto social o de citas, con navegación intuitiva y potencial para integración con servicios de backend en la nube.',
      estado: 'completado',
      tecnologias: ['Angular', 'TypeScript', 'tailwindcss'],
      imagenUrl: 'TodoApp/TodoApp.png',
      proyectoUrl: 'https://mydateapp-5df85.web.app/',
      mostrarEnPortafolio:true
    },
    {
      nombre: 'Store App',
      descripcion: 'Store es una aplicación web SPA tipo tienda online desplegada en Vercel, con una interfaz que permite visualizar un catálogo de productos y un carrito de compras. El proyecto presenta una experiencia de usuario fluida y moderna, típica de aplicaciones construidas con frameworks frontend como Angular (u otro SPA), esta app consume la app https://fakeapi.platzi.com/',
      estado: 'completado',
      tecnologias: ['Angular', 'TypeScript', 'CSS','tailwindcss'],
      imagenUrl: 'store/store.png',
      proyectoUrl: 'https://store-ruddy-chi.vercel.app/',
      mostrarEnPortafolio:true
    }
  ];
  return proyectos;
  }
}
