import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  elementos = [
    {
      texto: 'Valorant',
      ruta: '/valorant'
    },
    {
      texto: 'Monster Hunter',
      ruta: '/mhw'
    },
    {
      texto: 'Pokemon',
      ruta: '/pokemon'
    },
    {
      texto: 'Final Space',
      ruta: '/finalSpace'
    }
  ]
}
