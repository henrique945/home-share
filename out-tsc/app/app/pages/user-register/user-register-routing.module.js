import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegisterPage } from './user-register.page';
const routes = [
    {
        path: '',
        component: UserRegisterPage
    }
];
let UserRegisterPageRoutingModule = class UserRegisterPageRoutingModule {
};
UserRegisterPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], UserRegisterPageRoutingModule);
export { UserRegisterPageRoutingModule };
//# sourceMappingURL=user-register-routing.module.js.map