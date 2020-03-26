import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerPageRoutingModule } from './owner-routing.module';
import { OwnerPage } from './owner.page';
import { LogoComponentModule } from '../../../shared/logo/logo.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OwnerPageRoutingModule,
        LogoComponentModule,
    ],
    declarations: [
        OwnerPage,
    ]
})
export class OwnerPageModule {
}
