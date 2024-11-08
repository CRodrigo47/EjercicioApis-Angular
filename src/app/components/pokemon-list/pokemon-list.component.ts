import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Daum, PokemonInterface } from '../../common/pokemon-interface';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink, NgbModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  private pokemonService: PokemonService = inject(PokemonService);
  apiData!: PokemonInterface;
  currentPage = 1

  constructor() {
    this.loadApi();
  }

  protected loadApi() {
    this.pokemonService.getCharacters(this.currentPage).subscribe({
      next: (value) => {
        this.apiData = value;
        return this.apiData;
      },
      error: (err) => console.log(err.message),
      complete: () => {
        console.log('Api cargada con exito.');
      },
    });
  }
}
