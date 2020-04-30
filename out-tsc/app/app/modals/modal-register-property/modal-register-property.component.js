import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PropertyService } from '../../services/property/property.service';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
let ModalRegisterPropertyComponent = class ModalRegisterPropertyComponent {
    constructor(modalController, service, storage) {
        this.modalController = modalController;
        this.service = service;
        this.storage = storage;
        /**
         * Objeto que guarda a propriedade
         */
        this.property = {
            street: '',
            township: '',
            city: '',
            description: '',
            listImages: ['https://i.pinimg.com/originals/27/e2/74/27e2744ddffaba310dec0d76b3221f04.jpg'],
            pricePerUser: 0,
            rooms: 0,
            isFull: false,
            university: '',
            userOwnerId: 0,
        };
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.storage.getItem(environment.keys.user);
            if (error) {
                console.log(error.message);
                return;
            }
            this.property.userOwnerId = success.id;
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
    onRegisterProperty() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.property.rooms = +this.property.rooms;
            yield this.service.postProperty(this.property);
            this.modalController.dismiss();
        });
    }
    cannotAdvance() {
        if (this.property.description.length === 0 || this.property.street.length === 0 || this.property.city.length === 0 || this.property.township.length === 0 || this.property.rooms === 0 || this.property.pricePerUser === 0) {
            return true;
        }
        return false;
    }
};
ModalRegisterPropertyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modal-register-property',
        templateUrl: './modal-register-property.component.html',
        styleUrls: ['./modal-register-property.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        PropertyService,
        StorageService])
], ModalRegisterPropertyComponent);
export { ModalRegisterPropertyComponent };
//# sourceMappingURL=modal-register-property.component.js.map