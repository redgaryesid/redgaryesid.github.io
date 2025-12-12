import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  skills: any[] = [
    { name: 'Angular', icon: 'tech-icons/Angular.svg' },
    { name: 'JavaScript', icon: 'tech-icons/javascript.svg' },
    { name: 'HTML5', icon: 'tech-icons/html5.svg' },
    { name: 'CSS3', icon: 'tech-icons/css3.svg' },
    { name: 'Git', icon: 'tech-icons/git.svg' },
    { name: 'C#', icon: 'tech-icons/netframework.svg' },
    { name :'PostgreSQL', icon: 'tech-icons/postgresql.svg' }      
  ];

}
