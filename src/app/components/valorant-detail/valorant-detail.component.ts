import { Component, inject, Input, OnInit } from '@angular/core';
import { Daum } from '../../common/valorant-interface';
import { ValorantService } from '../../services/valorant.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-valorant-detail',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './valorant-detail.component.html',
  styleUrl: './valorant-detail.component.css',
})
export class ValorantDetailComponent implements OnInit {
  @Input('id') id!: number;
  character!: Daum;
  private valorantService: ValorantService = inject(ValorantService);

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.valorantService.getCharacter(this.id).subscribe({
      next: value => {
        this.character = value.data;
      },
      error: (err) => console.error(err),
      complete: () => console.log('Personaje cargado con exito.'),
    });
  }
}
