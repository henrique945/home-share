import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMessageComponent } from '../../modals/modal-message/modal-message.component';
let PostHomeComponent = class PostHomeComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    iWantThisProperty() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ModalMessageComponent,
                cssClass: ['modal-message'],
                componentProps: { property: this.property },
                backdropDismiss: false,
            });
            return yield modal.present();
            console.log('Mande uma mensagem para o proprietário.');
            console.log('Tem certeza que quer essa propriedade?');
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PostHomeComponent.prototype, "property", void 0);
PostHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-post-home',
        templateUrl: './post-home.component.html',
        styleUrls: ['./post-home.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], PostHomeComponent);
export { PostHomeComponent };
//# sourceMappingURL=post-home.component.js.map