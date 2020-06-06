import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction/transaction.service';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
import { ModalRegisterPropertyComponent } from '../../modals/modal-register-property/modal-register-property.component';
import { ModalController } from '@ionic/angular';
import { ModalMessageIconComponent } from '../../modals/modal-message-icon/modal-message-icon.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.scss' ],
})
export class MessageComponent implements OnInit {

  /**
   * A quantidade de menssagens
   */
  public countMessage: number = 0;

  constructor(
      private readonly transactionService: TransactionService,
      private readonly storage: StorageService,
      private readonly modalController: ModalController,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    const { error, success } = await this.storage.getItem(environment.keys.user);

    if (error) {
      console.log(error);
      return;
    }

    const result = await this.transactionService.transactionCount(success.id);
    this.countMessage = result;
  }

  /**
   * Método que abre a modal de mensagens icon
   */
  public async openMessageIconModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalMessageIconComponent,
      cssClass: [ 'modal-message-icon' ],
      backdropDismiss: true,
    });

    return await modal.present();
  }
}
