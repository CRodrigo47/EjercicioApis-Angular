import { Component, inject } from '@angular/core';
import { FinalSpaceService } from '../../services/final-space.service';
import { FinalSpaceInterface } from '../../common/final-space-interface';

@Component({
  selector: 'app-final-space-list',
  standalone: true,
  imports: [],
  templateUrl: './final-space-list.component.html',
  styleUrl: './final-space-list.component.css'
})
export class FinalSpaceListComponent {
  private finalSpaceService: FinalSpaceService = inject(FinalSpaceService)
  apiData: FinalSpaceInterface[] = [];

  constructor() {
      this.loadApi()
  }

  private loadApi(){
    this.finalSpaceService.getCharacters().subscribe(
      {
        next: value => {
          this.apiData = value;
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
