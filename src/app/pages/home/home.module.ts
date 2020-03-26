import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage,
                children: [
                    {path: '', redirectTo: 'home'},
                    {path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerPageModule)},
                    {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)},
                ]
            },
        ]),
    ],
    declarations: [
        HomePage,
    ]
})
export class HomePageModule {
}
