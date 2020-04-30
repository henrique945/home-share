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

}
