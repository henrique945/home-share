import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserRegisterPageRoutingModule } from './user-register-routing.module';
import { UserRegisterPage } from './user-register.page';
import { LogoComponentModule } from '../../shared/logo/logo.module';
let UserRegisterPageModule = class UserRegisterPageModule {
};
UserRegisterPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            UserRegisterPageRoutingModule,
            LogoComponentModule
        ],
        declarations: [UserRegisterPage]
    })
], UserRegisterPageModule);
export { UserRegisterPageModule };
//# sourceMappingURL=user-register.module.js.map