import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  form;

   constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.nonNullable.group({
      nombre: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email]],
      mensaje: ['', [ Validators.required, Validators.minLength(10)]],

    });
  }
  crear(){
    console.log("Formulario enviado");
  }
}
