import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInterface } from '../common/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly URL = 'https://api.pokemontcg.io/v2/cards'
  private http: HttpClient = inject(HttpClient)

  getCharacters(): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(this.URL);
  }

  constructor() { }
}
