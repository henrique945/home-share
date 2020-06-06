import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionPayload } from '../../models/payloads/transaction.payload';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
import { TransactionService } from '../../services/transaction/transaction.service';

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

  constructor(
      private readonly modalController: ModalController,
      private readonly storage: StorageService,
      private readonly transactionService: TransactionService,
  ) {
  }

  public async ngOnInit(): Promise<void> {

  }

  /**
   * Botão de cancelar o cadastro de propriedade
   */
  public async onCancel(): Promise<void> {
    await this.modalController.dismiss();
  }
}
