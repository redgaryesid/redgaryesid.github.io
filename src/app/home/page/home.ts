import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  skills: any[] = [
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'HTML5', icon: 'html5.svg' },
    { name: 'CSS3', icon: 'css3.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'C#', icon: 'netframework.svg' },
    { name :'PostgreSQL', icon: 'postgresql.svg' }      
  ];

}
