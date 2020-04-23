import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: HomePage,
                    children: [
                        { path: '', redirectTo: 'owner' },
                        { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerPageModule) },
                        { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserPageModule) },
                    ],
                },
            ]),
        ],
        declarations: [
            HomePage,
        ],
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map