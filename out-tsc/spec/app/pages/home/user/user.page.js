import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../../../services/property/property.service';
let UserPage = class UserPage {
    constructor(navController, propertyService) {
        this.navController = navController;
        this.propertyService = propertyService;
        /**
         * Lista de propriedades
         */
        this.listProperty = [
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
        // https://i.pinimg.com/originals/27/e2/74/27e2744ddffaba310dec0d76b3221f04.jpg
        /**
         * Variável que guarda a faculdade a ser pesquisada
         */
        this.searchUniversity = '';
        /**
         * Variável que calcula o valor do swipe feito
         */
        this.startSwipeValue = 0;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.propertyService.getAllProperties();
            if (result) {
                this.listProperty = result;
            }
        });
    }
    /**
     * Função que detecta mudança na busca por faculdades
     */
    updateUniversity() {
        console.log(this.searchUniversity);
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
        if (event.distance - this.startSwipeValue > 30 && event.direction === 'x') {
            console.log('left page');
            this.navController.navigateForward('/home/owner');
        }
    }
};
UserPage = tslib_1.__decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.page.html',
        styleUrls: ['./user.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        PropertyService])
], UserPage);
export { UserPage };
//# sourceMappingURL=user.page.js.map