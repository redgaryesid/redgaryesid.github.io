import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Proyecto } from '../../../Models/proyecto.models';
import { ProyectoFooter } from '../proyecto-footer/proyecto-footer';


@Component({
  selector: 'app-proyecto-detalles',
  imports: [ProyectoFooter],
  templateUrl: './proyecto-detalles.html',
  styleUrl: './proyecto-detalles.css',
})
export class ProyectoDetalles {
  @Output() close = new EventEmitter<void>();
  @Input() proyecto!: Proyecto;

  onClose() {
    this.close.emit();
  }
  
}
