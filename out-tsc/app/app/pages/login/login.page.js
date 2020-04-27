import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';
let LoginPage = class LoginPage {
    constructor(navController, service) {
        this.navController = navController;
        this.service = service;
        /**
         * Objeto que guarda o login do usuário
         */
        this.login = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    /**
     * Função ao clicar no botão de Logar
     */
    onClickToLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const success = yield this.service.autenticate(this.login);
            if (success) {
                yield this.navController.navigateForward('home');
            }
        });
    }
    /**
     * Função ao clicar no botão de Logar
     */
    onClickToRegister() {
        this.navController.navigateForward('register');
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        UserService])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map