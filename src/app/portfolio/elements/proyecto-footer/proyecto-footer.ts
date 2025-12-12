import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-footer',
  imports: [],
  templateUrl: './proyecto-footer.html',
  styleUrl: './proyecto-footer.css',
})
export class ProyectoFooter {
  @Input() tecnologias: string[] = [];
}
