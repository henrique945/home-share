import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
import { TransactionService } from '../../services/transaction/transaction.service';
let ModalMessageComponent = class ModalMessageComponent {
    constructor(modalController, storage, transactionService) {
        this.modalController = modalController;
        this.storage = storage;
        this.transactionService = transactionService;
        /**
         * O objeto que guarda as informações da transação
         */
        this.transaction = {
            message: '',
            propertyId: 0,
            userOwnerId: 0,
            userRentId: 0,
        };
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.storage.getItem(environment.keys.user);
            if (error) {
                console.log(error);
                return;
            }
            this.transaction.userRentId = success.id;
            this.transaction.userOwnerId = this.property.userOwnerId;
            this.transaction.propertyId = this.property.id;
        });
    }
    /**
     * Botão de cancelar o cadastro de propriedade
     */
    onCancel() {
        this.modalController.dismiss();
    }
    /**
     * Botão para registrar uma propriedade
     */
    onMakeTransaction() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(this.transaction);
            yield this.transactionService.createTransaction(this.transaction);
            this.modalController.dismiss();
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ModalMessageComponent.prototype, "property", void 0);
ModalMessageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modal-message',
        templateUrl: './modal-message.component.html',
        styleUrls: ['./modal-message.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        StorageService,
        TransactionService])
], ModalMessageComponent);
export { ModalMessageComponent };
//# sourceMappingURL=modal-message.component.js.map