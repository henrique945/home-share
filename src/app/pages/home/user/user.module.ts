import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
import { LogoComponentModule } from '../../../shared/logo/logo.module';
import { PostHomeComponent } from '../../../components/post-home/post-home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserPageRoutingModule,
        LogoComponentModule,
    ],
    declarations: [
        UserPage,
        PostHomeComponent,
    ]
})
export class UserPageModule {
}
