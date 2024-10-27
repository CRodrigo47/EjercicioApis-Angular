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
  bgCardColor!: string;
  borderCardColor!: string;
  private pokeCardService: PokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.loadCard();
    
  }

  private loadCard() {
    this.pokeCardService.getCard(this.id).subscribe({
      next: (value) => {
        this.card = value.data;
        if (["Metal", "Colorless", "Psychic"].includes(value.data.types[0])) {
          this.bgCardColor = "bg-secondary bg-gradient text-black";
          this.borderCardColor= "border-bottom border-black"
        } else if (["Fire", "Fighting", "Fairy"].includes(value.data.types[0])) {
          this.bgCardColor = "bg-danger bg-gradient text-black";
          this.borderCardColor= "border-bottom border-black"
        } else if (value.data.types[0] == "Grass") {
          this.bgCardColor = "bg-success bg-gradient text-bg-success";
          this.borderCardColor= "border-bottom"
        } else if (value.data.types[0] == "Water") {
          this.bgCardColor = "bg-info bg-gradient text-bg-info";
          this.borderCardColor= "border-bottom border-black"
        } else if (["Lightning", "Dragon"].includes(value.data.types[0])) {
          this.bgCardColor = "bg-warning bg-gradient text-bg-warning";
          this.borderCardColor= "border-bottom border-black"
        } else if (value.data.types[0] == "Darkness") {
          this.bgCardColor = "bg-dark bg-gradient text-bg-dark";
          this.borderCardColor= "border-bottom"
        }
      },
      error: (err) => console.log(err.message),
      complete: () => {console.log('Carta cargada con exito')}
    });
  }
}
