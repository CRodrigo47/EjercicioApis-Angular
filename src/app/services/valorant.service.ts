import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValorantInterface } from '../common/valorant-interface';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private readonly URL = "https://valorant-api.com/v1/agents";
  private http: HttpClient = inject(HttpClient)

  getCharacters(): Observable<ValorantInterface>{
    return this.http.get<ValorantInterface>(this.URL);
  }

  constructor() { }
}
