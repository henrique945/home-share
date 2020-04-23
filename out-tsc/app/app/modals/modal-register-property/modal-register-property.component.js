import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
let ModalRegisterPropertyComponent = class ModalRegisterPropertyComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    onCancel() {
        this.modalController.dismiss();
    }
};
ModalRegisterPropertyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modal-register-property',
        templateUrl: './modal-register-property.component.html',
        styleUrls: ['./modal-register-property.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], ModalRegisterPropertyComponent);
export { ModalRegisterPropertyComponent };
//# sourceMappingURL=modal-register-property.component.js.map