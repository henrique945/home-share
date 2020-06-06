import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TransactionPayload } from '../../models/payloads/transaction.payload';

@Injectable({
  providedIn: 'root',
})
export class TransactionInteractor {

  constructor(
      private readonly http: HttpAsyncService,
  ) {
  }

  /**
   * Cria uma transação
   */
  public async createTransaction(payload: TransactionPayload): Promise<AsyncResult<unknown>> {
    return await this.http.post<unknown>(environment.routes.transaction, payload);
  }

  /**
   * Busca quantas mensagem aquele usuário tem pelo seu id
   */
  public async countTransactionByUserId(userId: number): Promise<AsyncResult<number>> {
    // TODO: fazer um sistema de mensagens melhor
    return await this.http.get<number>(`${environment.routes.transaction}/userId/${userId}/count`);
  }

  /**
   * Busca as transações daquele usuário
   */
  public async getUserTransaction(userId: number): Promise<AsyncResult<TransactionPayload[]>> {
    return await this.http.get<TransactionPayload[]>(`${environment.routes.transaction}/userId/${userId}`);
  }

}
