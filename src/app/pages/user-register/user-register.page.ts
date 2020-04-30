import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserPayload } from '../../models/payloads/user.payload';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: [ './user-register.page.scss' ],
})
export class UserRegisterPage {

  public register: UserPayload = {
    id: 0,
    name: '',
    email: '',
    password: '',
    cellphone: '',
    university: '',
    cpf: '',
  };

  constructor(
      private readonly navController: NavController,
      private readonly service: UserService,
  ) {
  }

  /**
   * Função para voltar a página de login
   */
  public onBackToLogin(): void {
    this.navController.navigateBack('login');
  }

  public async onClickToRegister(): Promise<void> {
    console.log(this.register);
    const success = await this.service.postUser(this.register);

    if (success) {
      console.log('usuário criado com sucesso!');
      // TODO: Criar toast Ctrl e logar direto
    }
  }
}
