import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinalSpaceInterface } from '../common/final-space-interface';

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {
  private readonly URL = "https://finalspaceapi.com/api/v0/character/";
  private http: HttpClient = inject(HttpClient)

  getCharacters(): Observable<FinalSpaceInterface[]>{
    return this.http.get<FinalSpaceInterface[]>(this.URL);
  }


  constructor() { }
}
