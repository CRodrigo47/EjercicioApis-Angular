import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ValorantListComponent } from './components/valorant-list/valorant-list.component';
import { MonsterHunterListComponent } from './components/monster-hunter-list/monster-hunter-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FinalSpaceListComponent } from './components/final-space-list/final-space-list.component';
import { ErrorComponent } from './components/error/error.component';
import { ValorantDetailComponent } from './components/valorant-detail/valorant-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'valorant',
        component: ValorantListComponent
    },
    {
        path: 'valorant/:id',
        component: ValorantDetailComponent
    },
    {
        path: 'mhw',
        component: MonsterHunterListComponent
    },
    {
        path: 'pokemon',
        component: PokemonListComponent
    },
    {
        path: 'finalSpace',
        component: FinalSpaceListComponent
    },
    {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full'
    }
];
