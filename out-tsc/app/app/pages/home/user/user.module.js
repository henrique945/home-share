import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
import { LogoComponentModule } from '../../../shared/logo/logo.module';
import { PostHomeComponent } from '../../../components/post-home/post-home.component';
import { SwipeModule } from 'ng-swipe';
import { ModalMessageComponent } from '../../../modals/modal-message/modal-message.component';
import { MessageComponentModule } from '../../../components/message/message.module';
let UserPageModule = class UserPageModule {
};
UserPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            UserPageRoutingModule,
            LogoComponentModule,
            SwipeModule,
            MessageComponentModule,
        ],
        declarations: [
            UserPage,
            PostHomeComponent,
            ModalMessageComponent,
        ],
        entryComponents: [
            ModalMessageComponent,
        ]
    })
], UserPageModule);
export { UserPageModule };
//# sourceMappingURL=user.module.js.map