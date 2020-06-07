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
        this.listProperty = [];
        // https://i.pinimg.com/originals/27/e2/74/27e2744ddffaba310dec0d76b3221f04.jpg
        /**
         * Variável que guarda a faculdade a ser pesquisada
         */
        this.searchUniversity = '';
        /**
         * Variável que calcula o valor do swipe feito
         */
        this.startSwipeValue = 0;
        /**
         * As cidades dos propriedades que vieram da API
         */
        this.listCities = [];
    }
    // TODO: add refresher
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.propertyService.getAllProperties();
            if (!result) {
                return;
            }
            this.listProperty = result;
            // separa as cidades das propriedades sem repeti-las
            let already = false;
            for (let i = 0; i < this.listProperty.length; i++) {
                this.listProperty[i].city = this.listProperty[i].city.toUpperCase();
                already = false;
                for (let j = 0; j < this.listCities.length; j++) {
                    if (this.listCities[j] === this.listProperty[i].city) {
                        already = true;
                    }
                }
                if (!already) {
                    this.listCities.push(this.listProperty[i].city);
                }
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