import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidroPageRoutingModule } from './vidro-routing.module';

import { VidroPage } from './vidro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidroPageRoutingModule
  ],
  declarations: [VidroPage]
})
export class VidroPageModule {}
