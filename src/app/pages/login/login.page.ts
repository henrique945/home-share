import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPayload } from '../../models/payloads/login.payload';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [ './login.page.scss' ],
})
export class LoginPage implements OnInit {

  /**
   * Objeto que guarda o login do usuário
   */
  public login: LoginPayload = {
    username: '',
    password: ''
  };

  constructor(
      private readonly navController: NavController,
      private readonly service: UserService,
  ) {
  }

  ngOnInit() {
  }


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
}
