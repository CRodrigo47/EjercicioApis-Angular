import { Component, inject, Input, OnInit } from '@angular/core';
import { MonsterHunterInterface } from '../../common/monster-hunter-interface';
import { MonsterHunterService } from '../../services/monster-hunter.service';

@Component({
  selector: 'app-monster-hunter-detail',
  standalone: true,
  imports: [],
  templateUrl: './monster-hunter-detail.component.html',
  styleUrl: './monster-hunter-detail.component.css'
})
export class MonsterHunterDetailComponent implements OnInit {
@Input('id') id!: number
weapon!: MonsterHunterInterface;
private mhwService: MonsterHunterService = inject(MonsterHunterService)

ngOnInit(): void {
  this.loadWeapon();
}

private loadWeapon(){
  this.mhwService.getCharacter(this.id).subscribe(
    {next: value => {
      this.weapon = value
    }}
  )
}

public empezarMayuscula(dato: string){
  return dato.charAt(0).toUpperCase() + dato.slice(1)
}

arrayRareza(rareza: number){
  return Array(rareza)
}
}
