import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Daum, ValorantAgentInterface, ValorantInterface } from '../common/valorant-interface';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  private readonly URL = 'https://valorant-api.com/v1/agents';
  private http: HttpClient = inject(HttpClient);

   constructor() {}

  getCharacters(): Observable<ValorantInterface> {
    return this.http.get<ValorantInterface>(this.URL);
  }

  getCharacter(id: number): Observable<ValorantAgentInterface> {
    return this.http.get<ValorantAgentInterface>(this.URL + '/' + id);
  }

 
}
