import { Injectable } from '@angular/core';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { StorageService } from '../../services/storage/storage.service';
import { LoginPayload } from '../../models/payloads/login.payload';
import { TokenProxy } from '../../models/proxies/token.proxy';
import { environment } from '../../../environments/environment';
import { UserPayload } from '../../models/payloads/user.payload';

@Injectable({
  providedIn: 'root',
})

export class UserInteractor {

  constructor(
      private readonly http: HttpAsyncService,
  ) {
  }

  /**
   * Autentica o usuário para logar
   */
  public async autenticate(payloadLogin: LoginPayload): Promise<AsyncResult<TokenProxy>> {
    return await this.http.post<TokenProxy>(environment.routes.auth, payloadLogin);
  }

  /**
   * Cria um usuário
   */
  public async postUser(payloadRegister: UserPayload): Promise<AsyncResult<unknown>> {
    return await this.http.post<unknown>(environment.routes.user, payloadRegister);
  }
}
