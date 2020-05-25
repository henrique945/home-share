import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoComponent } from './logo.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
    exports: [
        LogoComponent,
    ],
    declarations: [
        LogoComponent,
    ],
})
export class LogoComponentModule {
}
