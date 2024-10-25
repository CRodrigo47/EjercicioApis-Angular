import { Component, inject, Input, OnInit, } from '@angular/core';
import { FinalSpaceService } from '../../services/final-space.service';
import { FinalSpaceInterface } from '../../common/final-space-interface';

@Component({
  selector: 'app-final-space-detail',
  standalone: true,
  imports: [],
  templateUrl: './final-space-detail.component.html',
  styleUrl: './final-space-detail.component.css'
})
export class FinalSpaceDetailComponent implements OnInit {
  @Input("id") id!: number
  character !: FinalSpaceInterface
  private fsCharService: FinalSpaceService = inject(FinalSpaceService)

  ngOnInit(): void {
      this.loadCharacter();
  }

  loadCharacter(){
    this.fsCharService.getCharacter(this.id).subscribe(
      {
        next: value => this.character = value,
        error: err => console.log(err.message),
        complete: () => console.log("Personaje cargado con exito")
      }
    )
  }

}
