import { Injectable } from '@angular/core';
import { TransactionInteractor } from '../../interactors/transaction/transaction.interactor';
import { TransactionPayload } from '../../models/payloads/transaction.payload';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

  constructor(
      private readonly interactor: TransactionInteractor,
      private readonly helper: HelperService,
  ) {
  }

  /**
   * Cria uma transação
   */
  public async createTransaction(payload: TransactionPayload): Promise<void> {
    const { error, success } = await this.interactor.createTransaction(payload);

    if (error) {
      console.log(error.error.message);
      await this.helper.showToast(error.error.message, 3000);
      return;
    }

    await this.helper.showToast('Mensagem enviada com sucesso!\nAguarde a resposta do proprietário.', 3000);
  }

  /**
   * Busca quantas transações um usuário possui
   */
  public async transactionCount(userId: number): Promise<number> {
    const { error, success } = await this.interactor.countTransactionByUserId(userId);

    if (error) {
      console.log(error.error.message);
      return;
    }

    return success;
  }

  /**
   * Busca as transações daquele usuário
   */
  public async getUserTransaction(userId: number): Promise<TransactionPayload[]> {
    const { error, success } = await this.interactor.getUserTransaction(userId);

    if (error) {
      console.log(error.error.message);
      return;
    }

    return success;
  }


}
