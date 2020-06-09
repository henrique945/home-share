import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionPayload } from '../../models/payloads/transaction.payload';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
import { TransactionService } from '../../services/transaction/transaction.service';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: [ './modal-message.component.scss' ],
})
export class ModalMessageComponent implements OnInit {

  /**
   * O objeto propriedade que vem da home
   */
  @Input() property;

  /**
   * O objeto que guarda as informações da transação
   */
  public transaction: TransactionPayload = {
    id: 0,
    message: '',
    propertyId: 0,
    userOwnerId: 0,
    userRentId: 0,
  };

  constructor(
      private readonly modalController: ModalController,
      private readonly storage: StorageService,
      private readonly transactionService: TransactionService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    const { error, success } = await this.storage.getItem(environment.keys.user);

    if (error) {
      console.log(error);
      return;
    }

    this.transaction.userRentId = success.id;
    this.transaction.userOwnerId = this.property.userOwnerId;
    this.transaction.propertyId = this.property.id;
  }

  /**
   * Botão de cancelar o cadastro de propriedade
   */
  public onCancel(): void {
    this.modalController.dismiss();
  }

  /**
   * Botão para registrar uma propriedade
   */
  public async onMakeTransaction(): Promise<void> {
    console.log(this.transaction);
    await this.transactionService.createTransaction(this.transaction);

    this.modalController.dismiss();
  }

}
