import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OwnerPage } from './owner.page';
const routes = [
    {
        path: '',
        component: OwnerPage
    }
];
let OwnerPageRoutingModule = class OwnerPageRoutingModule {
};
OwnerPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OwnerPageRoutingModule);
export { OwnerPageRoutingModule };
//# sourceMappingURL=owner-routing.module.js.map