import { Injectable } from '@angular/core';
import { Trabajo } from '../Models/trabajo.models';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  GetExperiencia():Trabajo[] {
   let trabajo: Trabajo[] = [
        {
          puesto: 'Desarrollador de software',
          empresa: 'CNT',
          inicio: 'Noviembre 2025',
          fin: 'Actualidad',
          descripcion: 'Desarrollo de aplicaciones de escritorio utilizando Visual Basic 6 y bases de datos en SQL Server para la gestión de hospitales.',
          tecnologias: ['C#', '.Net Framework', 'Visual Basic 6', 'SQL Server']
        }as Trabajo,
        {
          puesto: 'Lider de desarrollo y soporte tecnico',
          empresa: 'M-Medical',
          inicio: 'Agosto 2021',
          fin: 'Noviembre 2024',
          descripcion: 'Líder de desarrollo y soporte de aplicaciones en el área de telemedicina y radiología en los lenguajes de javascript y C# enfocado a ambientes web, utilizando el framework angularjs y manejo de bases de datos en PostgreSQL y mysql.',
          tecnologias: ['HTML', 'CSS', 'JavaScript',"Jquery","Bootstrap","AngularJS","C#",".Net","PostgreSQL","Sql Server"]
        }as Trabajo,
        {
          puesto: 'Ingeniero de desarrollo de software',
          empresa: 'Global E-Health',
          inicio: 'Marzo 2021',
          fin: 'Julio 2021',
          descripcion: 'Desarrollo y soporte de aplicaciones en el área de telemedicina en los lenguajes de javascript y C# enfocado a ambientes web, utilizando el framework vuejs y manejo de bases de datos en PostgreSQL.',
          tecnologias: ['HTML', 'CSS', 'JavaScript',"Jquery","Bootstrap","Vue JS","C#",".Net","PostgreSQL","Sql Server"]
        } as Trabajo,
        {
          puesto: 'Ingeniero de desarrollo de software',
          empresa: 'M-Medical',
          inicio: 'Septiembre 2018',
          fin: 'Marzo 2021',
          descripcion: 'Desarrollo y soporte de aplicaciones en el área de telemedicina y radiología en los lenguajes de javascript y C# enfocado a ambientes web, utilizando el framework angularjs y manejo de bases de datos en PostgreSQL y mysql.',
          tecnologias: ['HTML', 'CSS', 'JavaScript',"Jquery","Bootstrap","AngularJS","C#",".Net","PostgreSQL","Sql Server"]
        }as Trabajo,
        {
          puesto: 'Desarrollador de software',
          empresa: 'Sinova',
          inicio: 'Febrero 2017',
          fin: 'Septiembre 2018',
          descripcion: 'Desarrollo y soporte de aplicaciones para la optimización de actividades diarias laborales en G-suit en los lenguajes de javascript y Google apps script enfocado a ambientes web.',
          tecnologias: ['HTML', 'CSS', 'JavaScript'," Google Apps Script","G-Suit","Jquery","Bootstrap"]
        }
      ];
      return trabajo;
  }
}
