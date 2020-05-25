import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction/transaction.service';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
let MessageComponent = class MessageComponent {
    constructor(transactionService, storage) {
        this.transactionService = transactionService;
        this.storage = storage;
        /**
         * A quantidade de menssagens
         */
        this.countMessage = 0;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.storage.getItem(environment.keys.user);
            if (error) {
                console.log(error);
                return;
            }
            const result = yield this.transactionService.transactionCount(success.id);
            this.countMessage = result;
        });
    }
};
MessageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-message',
        templateUrl: './message.component.html',
        styleUrls: ['./message.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [TransactionService,
        StorageService])
], MessageComponent);
export { MessageComponent };
//# sourceMappingURL=message.component.js.map