import { Component, Input } from '@angular/core';
import { Proyecto } from '../../../Models/proyecto.models';

@Component({
  selector: 'app-proyecto-element',
  imports: [],
  templateUrl: './proyecto-element.html',
  styleUrl: './proyecto-element.css',
})
export class ProyectoElement {
  @Input() proyecto!: Proyecto;

}
