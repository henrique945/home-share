import { Component, OnInit } from '@angular/core';
import { TransactionPayload } from '../../models/payloads/transaction.payload';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
import { TransactionService } from '../../services/transaction/transaction.service';
import { UserPayload } from '../../models/payloads/user.payload';

@Component({
  selector: 'app-modal-message-icon',
  templateUrl: './modal-message-icon.component.html',
  styleUrls: [ './modal-message-icon.component.scss' ],
})
export class ModalMessageIconComponent implements OnInit {

  /**
   * A lista de transações
   */
  public listTransaction: TransactionPayload[] = [];

  /**
   * O objeto que guarda as informações do usuário
   */
  public user: UserPayload = {
    cellphone: '',
    cpf: '',
    email: '',
    id: 0,
    name: '',
    password: '',
    university: '',
  };

  /**
   * Variável que guarda a resposta
   */
  public answer: string[] = [];

  constructor(
      private readonly storage: StorageService,
      private readonly transactionService: TransactionService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    const { error: errorUser, success: successUser } = await this.storage.getItem<UserPayload>(environment.keys.user);

    this.user = successUser;

    const result = await this.transactionService.getUserTransaction(this.user.id);

    this.listTransaction = result;
  }

  /**
   * Função que manda mensagem para outro usuário
   */
  public async sendMessage(payload: TransactionPayload, newMessage: string): Promise<void> {
    this.answer = this.answer.map(item => '');

    payload.message = newMessage;

    const result = await this.transactionService.updateTransaction(payload, payload.id);

    console.log(result);
  }
}
