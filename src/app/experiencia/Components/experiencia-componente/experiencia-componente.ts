import { Component, Input } from '@angular/core';
import { Trabajo } from '../../../Models/trabajo.models';

@Component({
  selector: 'app-experiencia-componente',
  imports: [],
  templateUrl: './experiencia-componente.html',
  styleUrl: './experiencia-componente.css',
})
export class ExperienciaComponente {
  @Input() trabajo!: Trabajo;

}
