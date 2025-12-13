import { Component } from '@angular/core';
import { Trabajo } from '../Models/trabajo.models';
import { ExperienciaComponente } from './Components/experiencia-componente/experiencia-componente';
import { ExperienciaService } from '../Services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  imports: [ExperienciaComponente],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {

  trabajos: Trabajo[] = [];
  constructor(private experienciaService: ExperienciaService) {
    this.trabajos = this.experienciaService.GetExperiencia();
  }
  

}
