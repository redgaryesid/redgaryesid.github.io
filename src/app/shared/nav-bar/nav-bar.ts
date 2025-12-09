import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLinkWithHref],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  showMenu: boolean = false;

  optionsMenu = [
    { name: 'Inicio', route: '/',active: true },
    { name: 'Experiencia', route: '/experiencia',active: true  },
    { name: 'Portafolio', route: '/portafolio',active: true  },
    { name: 'Blog', route: '/blog',active: false  },
    { name: 'Contactame', route: '/contactame',active: true  }
  ];
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
