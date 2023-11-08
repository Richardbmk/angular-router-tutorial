import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  {
    path: 'heroes',
    redirectTo: '/superheroes',
  },
  {
    path: 'hero/:id',
    redirectTo: '/superhero/:id',
  },
  {
    path: 'superheroes',
    component: HeroListComponent,
    data: { animation: 'heroes' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
