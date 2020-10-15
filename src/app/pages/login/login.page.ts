//#region Imports

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPayload } from '../../models/payloads/login.payload';
import { UserService } from '../../services/user/user.service';

//#endregion

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
})
export class LoginPage {

  //#region Constructors

  constructor(
      private readonly navController: NavController,
      private readonly service: UserService,
  ) {
  }

  //#endregion

  //#region Properties

  /**
   * Objeto que guarda o login do usuário
   */
  public login: LoginPayload = {
    username: '',
    password: ''
  };

  //#endregion

  //#region Functions

  /**
   * Função ao clicar no botão de Logar
   */
  public async onClickToLogin(): Promise<void> {
    const success = await this.service.autenticate(this.login);

    if (success) {
      await this.navController.navigateForward('home');
    }
  }

  /**
   * Função ao clicar no botão de Logar
   */
  public onClickToRegister(): void {
    this.navController.navigateForward('register');
  }

  //#endregion

}
