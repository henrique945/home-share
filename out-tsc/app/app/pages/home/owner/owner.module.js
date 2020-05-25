import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OwnerPageRoutingModule } from './owner-routing.module';
import { OwnerPage } from './owner.page';
import { LogoComponentModule } from '../../../shared/logo/logo.module';
import { DropdownHomeComponent } from '../../../components/dropdown-home/dropdown-home.component';
import { ModalRegisterPropertyComponent } from '../../../modals/modal-register-property/modal-register-property.component';
import { SwipeModule } from 'ng-swipe';
import { MessageComponentModule } from '../../../components/message/message.module';
let OwnerPageModule = class OwnerPageModule {
};
OwnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OwnerPageRoutingModule,
            LogoComponentModule,
            MessageComponentModule,
            SwipeModule,
        ],
        declarations: [
            OwnerPage,
            DropdownHomeComponent,
            ModalRegisterPropertyComponent,
        ],
        entryComponents: [
            ModalRegisterPropertyComponent,
        ]
    })
], OwnerPageModule);
export { OwnerPageModule };
//# sourceMappingURL=owner.module.js.map