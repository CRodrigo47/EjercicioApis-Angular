import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MonsterHunterInterface } from '../common/monster-hunter-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterHunterService {
  private readonly URL = "https://mhw-db.com/weapons";
  private http: HttpClient = inject(HttpClient)

  getCharacters(): Observable<MonsterHunterInterface>{
    return this.http.get<MonsterHunterInterface>(this.URL);
  }

  constructor() { }
}
