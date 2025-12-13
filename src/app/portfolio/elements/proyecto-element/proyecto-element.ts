import { Component, Input } from '@angular/core';
import { Proyecto } from '../../../Models/proyecto.models';
import { ProyectoDetalles } from '../proyecto-detalles/proyecto-detalles';
import { ProyectoFooter } from "../proyecto-footer/proyecto-footer";
import { TruncatePipe } from '../../../pipes/truncate-pipe';

@Component({
  selector: 'app-proyecto-element',
  imports: [ProyectoDetalles, ProyectoFooter,TruncatePipe],
  templateUrl: './proyecto-element.html',
  styleUrl: './proyecto-element.css',
})
export class ProyectoElement {
  @Input() proyecto!: Proyecto;
  showDetails: boolean = false;

  toggleDetails() {
    console.log("Toggling details view");
    this.showDetails = !this.showDetails;
  }

}
