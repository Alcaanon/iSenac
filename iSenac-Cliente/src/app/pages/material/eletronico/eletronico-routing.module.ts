import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EletronicoPage } from './eletronico.page';

const routes: Routes = [
  {
    path: '',
    component: EletronicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EletronicoPageRoutingModule {}
