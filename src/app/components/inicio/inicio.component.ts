import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenes = [{
    url: "ValorantAPi.webp",
    name: "Valorant",
    path: "/valorant"
  },
  {
    url: "MonsterHunterApi.webp",
    name: "Monster Hunter",
    path: "/mhw"
  },
  {
    url: "PokemonApi.jfif",
    name: "Pokemon TCG",
    path: "/pokemon"
  },
  {
    url: "Final_SpaceAPI.webp",
    name: "Final Space",
    path: "/finalSpace"
  }
  ]
}
