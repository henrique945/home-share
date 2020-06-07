import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
import { TransactionService } from '../../services/transaction/transaction.service';
let ModalMessageIconComponent = class ModalMessageIconComponent {
    constructor(storage, transactionService) {
        this.storage = storage;
        this.transactionService = transactionService;
        /**
         * A lista de transações
         */
        this.listTransaction = [];
        /**
         * O objeto que guarda as informações do usuário
         */
        this.user = {
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
        this.answer = [];
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error: errorUser, success: successUser } = yield this.storage.getItem(environment.keys.user);
            this.user = successUser;
            const result = yield this.transactionService.getUserTransaction(this.user.id);
            this.listTransaction = result;
        });
    }
    /**
     * Função que manda mensagem para outro usuário
     */
    sendMessage() {
        this.answer = this.answer.map(item => '');
    }
};
ModalMessageIconComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modal-message-icon',
        templateUrl: './modal-message-icon.component.html',
        styleUrls: ['./modal-message-icon.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [StorageService,
        TransactionService])
], ModalMessageIconComponent);
export { ModalMessageIconComponent };
//# sourceMappingURL=modal-message-icon.component.js.map