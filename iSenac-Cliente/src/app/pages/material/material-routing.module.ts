import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialPage } from './material.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialPage
  },
  {
    path: 'papel',
    loadChildren: () => import('./papel/papel.module').then( m => m.PapelPageModule)
  },
  {
    path: 'metal',
    loadChildren: () => import('./metal/metal.module').then( m => m.MetalPageModule)
  },
  {
    path: 'plastico',
    loadChildren: () => import('./plastico/plastico.module').then( m => m.PlasticoPageModule)
  },
  {
    path: 'vidro',
    loadChildren: () => import('./vidro/vidro.module').then( m => m.VidroPageModule)
  },
  {
    path: 'eletronico',
    loadChildren: () => import('./eletronico/eletronico.module').then( m => m.EletronicoPageModule)
  },
  {
    path: 'especial',
    loadChildren: () => import('./especial/especial.module').then( m => m.EspecialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialPageRoutingModule {}
