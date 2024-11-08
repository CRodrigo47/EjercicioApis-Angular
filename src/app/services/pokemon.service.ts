import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCardInterface, PokemonInterface } from '../common/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly URL = 'https://api.pokemontcg.io/v2/cards'
  private http: HttpClient = inject(HttpClient)

  getCharacters(page: number): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(this.URL + '?page=' + page + '&pageSize=20');
  }

  getCard(id: number): Observable<PokemonCardInterface>{
    return this.http.get<PokemonCardInterface>(this.URL + "/" + id);
  }

  constructor() { }
}
