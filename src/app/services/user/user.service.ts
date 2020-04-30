import { Injectable } from '@angular/core';
import { UserInteractor } from '../../interactors/user/user.interactor';
import { LoginPayload } from '../../models/payloads/login.payload';
import { TokenProxy } from '../../models/proxies/token.proxy';
import { StorageService } from '../storage/storage.service';
import { environment } from '../../../environments/environment';
import { UserPayload } from '../../models/payloads/user.payload';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  constructor(
      private readonly interactor: UserInteractor,
      private readonly storage: StorageService,
  ) {
  }

  /**
   * Autentica o usuário para logar
   */
  public async autenticate(payloadLogin: LoginPayload): Promise<TokenProxy | boolean> {
    const { error, success } = await this.interactor.autenticate(payloadLogin);

    if (error) {
      console.log(error.message);
      return false;
    }

    await this.storage.setItem(environment.keys.token, success.token);

    return success;
  }

  /**
   * Cria um usuário
   */
  public async postUser(payloadRegister: UserPayload): Promise<unknown | boolean> {
    const { error, success } = await this.interactor.postUser(payloadRegister);

    if (error) {
      console.log(error.error);
      return false;
    }

    return success;
  }

  /**
   * Busca as informações do usuário logado
   */
  public async getMyInfo(): Promise<UserPayload> {
    const { error, success } = await this.interactor.getMyInfo();

    if (error) {
      console.log(error.message);
      return;
    }

    await this.storage.setItem(environment.keys.user, success);
    return success;
  }

}
