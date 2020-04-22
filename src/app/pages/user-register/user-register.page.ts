import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage {

  constructor(
      private readonly navController: NavController,
  ) { }

  /**
   * Função para voltar a página de login
   */
  public onBackToLogin(): void{
    this.navController.navigateBack('login');
  }
}
