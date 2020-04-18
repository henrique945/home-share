import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPayload } from '../../models/login.payload';

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
    email: '',
    password: ''
  };

  constructor(
      private readonly navController: NavController,
  ) {
  }

  ngOnInit() {
  }


  /**
   * Função ao clicar no botão de Logar
   */
  public onClickToLogin(): void {
    if (this.login.email === 'homeshare@gmail.com' && this.login.password === '1234') {
      this.navController.navigateForward('home');
    }
  }

  /**
   * Função ao clicar no botão de Logar
   */
  public onClickToRegister(): void {
    this.navController.navigateForward('register');
  }
}
