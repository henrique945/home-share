import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction/transaction.service';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';

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

}
