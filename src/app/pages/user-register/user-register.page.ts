//#region Imports

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserPayload } from '../../models/payloads/user.payload';
import { UserService } from '../../services/user/user.service';

//#endregion

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: [ './user-register.page.scss' ],
})
export class UserRegisterPage {

  //#region Constructors

  constructor(
      private readonly navController: NavController,
      private readonly service: UserService,
  ) {
  }

  //#endregion

  //#region Properties

  /**
   * Objeto que guarda as informações para cadastrar um usuário
   */
  public register: UserPayload = {
    id: 0,
    name: '',
    email: '',
    password: '',
    cellphone: '',
    university: '',
    cpf: '',
  };

  //#endregion

  //#region Functions

  /**
   * Método para criar um usuário
   */
  public async onClickToRegister(): Promise<void> {
    const success = await this.service.postUser(this.register);

    if (success) {
      // TODO: Criar toast Ctrl e logar direto
      await this.navController.navigateForward('login');
    }
  }

  //#endregion

}
