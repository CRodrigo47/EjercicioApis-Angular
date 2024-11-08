import { Component, inject } from '@angular/core';
import { MonsterHunterService } from '../../services/monster-hunter.service';
import { MonsterHunterInterface } from '../../common/monster-hunter-interface';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-monster-hunter-list',
  standalone: true,
  imports: [RouterLink, NgbModule],
  templateUrl: './monster-hunter-list.component.html',
  styleUrl: './monster-hunter-list.component.css',
})
export class MonsterHunterListComponent {
  private monsterHunterService: MonsterHunterService =
    inject(MonsterHunterService);
  apiData: MonsterHunterInterface[] = [];
  currentPage = 1;

  constructor() {
    this.loadApi();
  }

  protected loadApi() {
    this.monsterHunterService.getCharacters(this.currentPage).subscribe({
      next: (value) => {
        this.apiData = value;
        return this.apiData;
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('Api cargada con exito.');
      },
    });
  }

  arrayRareza(rareza: number) {
    return Array(rareza);
  }
}
