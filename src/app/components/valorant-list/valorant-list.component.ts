import { Component, inject } from '@angular/core';
import { ValorantService } from '../../services/valorant.service';
import { Daum, ValorantInterface } from '../../common/valorant-interface';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-valorant-list',
  standalone: true,
  imports: [NgStyle, RouterLink],
  templateUrl: './valorant-list.component.html',
  styleUrl: './valorant-list.component.css'
})
export class ValorantListComponent {
  hoverActive!: boolean;
  backgroundLink!: string | undefined;
  private valorantService: ValorantService = inject(ValorantService)
  apiData: Daum[]=[];

  constructor() {
      this.loadApi()
  }

  private loadApi(){
    this.valorantService.getCharacters().subscribe(
      {
        next: value => {
          this.apiData = value.data.filter((agent) => agent.isPlayableCharacter);
          return this.apiData;
        },
        error: err => {
          console.log(err.message);
        },
        complete: () => {
          console.log("Api cargada con exito.");
          
        }
      }
    )
  }

}
