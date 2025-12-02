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

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
