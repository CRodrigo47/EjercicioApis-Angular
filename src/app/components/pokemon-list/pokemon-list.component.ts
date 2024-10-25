import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Daum } from '../../common/pokemon-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  private pokemonService: PokemonService = inject(PokemonService);
  apiData: Daum[] = [];

  constructor() {
    this.loadApi();
  }

  private loadApi() {
    this.pokemonService.getCharacters().subscribe({
      next: (value) => {
        this.apiData = value.data;
        return this.apiData;
      },
      error: (err) => console.log(err.message),
      complete: () => {
        console.log('Api cargada con exito.');
      },
    });
  }
}
