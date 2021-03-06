//#region Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LogoComponentModule } from '../../shared/logo/logo.module';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LogoComponentModule,
  ],
  declarations: [
    LoginPage,
  ]
})
export class LoginPageModule {
}
