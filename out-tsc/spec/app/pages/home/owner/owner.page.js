import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalRegisterPropertyComponent } from '../../../modals/modal-register-property/modal-register-property.component';
import { PropertyService } from '../../../services/property/property.service';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../services/storage/storage.service';
let OwnerPage = class OwnerPage {
    constructor(modalController, navController, propertyService, storage) {
        this.modalController = modalController;
        this.navController = navController;
        this.propertyService = propertyService;
        this.storage = storage;
        /**
         * Lista de propriedades do usuário
         */
        this.listPropertyUser = [
            {
                street: 'Almeida dos passaros',
                township: 'Vila Rica',
                city: 'Salto',
                description: 'Ótimo local para dormir e estar perto da faculdade',
                university: 'FACENS',
                rooms: 2,
                pricePerUser: 500,
                isFull: false,
                userOwnerId: 0,
                listImages: ['./assets/imgs/room_image.jpg'],
            },
            {
                street: 'Almeida dos passaros2',
                township: 'Vila Rica',
                city: 'Salto',
                description: 'Ótimo local para dormir e estar perto da faculdade',
                university: 'FACENS',
                rooms: 2,
                pricePerUser: 500,
                isFull: false,
                userOwnerId: 0,
                listImages: ['./assets/imgs/room_image.jpg'],
            },
            {
                street: 'Almeida dos passaros3',
                township: 'Vila Rica',
                city: 'Salto',
                description: 'Ótimo local para dormir e estar perto da faculdade',
                university: 'FACENS',
                rooms: 2,
                pricePerUser: 500,
                isFull: false,
                userOwnerId: 0,
                listImages: ['./assets/imgs/room_image.jpg'],
            },
        ];
        /**
         * Variável que calcula o valor do swipe feito
         */
        this.startSwipeValue = 0;
        /**
         * Diz se o usuário tem propriedades cadastradas
         */
        this.noRegisterProperty = false;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.storage.getItem(environment.keys.user);
            if (error) {
                console.log(error.message);
                return;
            }
            const result = yield this.propertyService.getProportiesByUserId(success.id);
            if (result) {
                this.listPropertyUser = result;
            }
            if (this.listPropertyUser.length === 0) {
                this.noRegisterProperty = true;
            }
        });
    }
    ionViewDidEnter() {
        this.startSwipeValue = 0;
    }
    /**
     * Função que abre uma modal para o usuário registar uma casa ou apartamento
     */
    onRegisterNewPlace() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ModalRegisterPropertyComponent,
                cssClass: ['modal-register-property'],
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    /**
     * A função que controla o começo do swipe
     */
    onSwipeMove(event) {
        console.log(`swipe direction: ${event.direction}`);
        console.log(`swipe distance: ${event.distance}`);
        if (this.startSwipeValue === 0) {
            this.startSwipeValue = event.distance;
        }
    }
    /**
     * Função que controla o final do swipe e se deve executar uma ação
     */
    onSwipeEnd(event) {
        console.log(`swipe direction end: ${event.direction}`);
        console.log(`swipe distance end: ${event.distance}`);
        if (event.distance - this.startSwipeValue < -30 && event.direction === 'x') {
            console.log('left page');
            this.navController.navigateForward('/home/user');
        }
    }
};
OwnerPage = tslib_1.__decorate([
    Component({
        selector: 'app-owner',
        templateUrl: './owner.page.html',
        styleUrls: ['./owner.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        NavController,
        PropertyService,
        StorageService])
], OwnerPage);
export { OwnerPage };
//# sourceMappingURL=owner.page.js.map