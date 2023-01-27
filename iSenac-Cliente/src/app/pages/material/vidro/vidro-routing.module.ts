import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidroPage } from './vidro.page';

const routes: Routes = [
  {
    path: '',
    component: VidroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidroPageRoutingModule {}
