import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
let UserRegisterPage = class UserRegisterPage {
    constructor(navController) {
        this.navController = navController;
    }
    /**
     * Função para voltar a página de login
     */
    onBackToLogin() {
        this.navController.navigateBack('login');
    }
};
UserRegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-user-register',
        templateUrl: './user-register.page.html',
        styleUrls: ['./user-register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController])
], UserRegisterPage);
export { UserRegisterPage };
//# sourceMappingURL=user-register.page.js.map