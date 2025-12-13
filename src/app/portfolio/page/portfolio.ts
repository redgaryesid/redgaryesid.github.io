import { Component } from '@angular/core';
import { Proyecto } from '../../Models/proyecto.models';
import { ProyectoElement } from '../elements/proyecto-element/proyecto-element';
import { ProyectosService } from '../../Services/proyectos.service';

@Component({
  selector: 'app-portfolio',
  imports: [ProyectoElement],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  proyectos: Proyecto[] = [];
  constructor(
    private readonly proyectosService: ProyectosService
  ) {
    this.proyectos = this.proyectosService.getProyectos();
  }
}
