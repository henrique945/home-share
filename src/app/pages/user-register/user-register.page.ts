import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

  constructor(
      private readonly navController: NavController,
  ) { }

  ngOnInit() {
  }

  /**
   * Função para voltar a página de login
   */
  public onBackToLogin(): void{
    console.log("oi");
    this.navController.navigateBack('login');
  }
}
