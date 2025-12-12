import { Component } from '@angular/core';
import { Proyecto } from '../../Models/proyecto.models';
import { ProyectoElement } from '../elements/proyecto-element/proyecto-element';

@Component({
  selector: 'app-portfolio',
  imports: [ProyectoElement],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {


  proyectos: Proyecto[] = [
    {
      nombre: 'Todo App',
      descripcion: 'Aplicación para gestionar tareas, que almacena información el el local storage.',
      estado: 'completado',
      tecnologias: ['Angular', 'TypeScript', 'tailwindcss'],
      imagenUrl: 'TodoApp/TodoApp.png',
      proyectoUrl: 'https://mydateapp-5df85.web.app/',
      mostrarEnPortafolio:true
    },
    {
      nombre: 'Store App',
      descripcion: 'Aplicación generada para consultar la Fake Stire API de platzi . https://fakeapi.platzi.com/',
      estado: 'completado',
      tecnologias: ['Angular', 'TypeScript', 'CSS','tailwindcss'],
      imagenUrl: 'store/store.png',
      proyectoUrl: 'https://store-ruddy-chi.vercel.app/',
      mostrarEnPortafolio:true
    }
  ];

  


}
