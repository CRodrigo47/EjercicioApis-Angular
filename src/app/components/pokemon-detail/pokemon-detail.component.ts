import { Component, inject, Input, OnInit } from '@angular/core';
import { Daum } from '../../common/pokemon-interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  @Input('id') id!: number;
  card!: Daum;
  private pokeCardService: PokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.loadCard();
  }

  private loadCard() {
    this.pokeCardService.getCard(this.id).subscribe({
      next: (value) => {
        this.card = value.data;
      },
      error: (err) => console.log(err.message),
      complete: () => {console.log('Carta cargada con exito')}
    });
  }
}
