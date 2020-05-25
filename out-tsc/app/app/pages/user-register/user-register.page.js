import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user/user.service';
let UserRegisterPage = class UserRegisterPage {
    constructor(navController, service) {
        this.navController = navController;
        this.service = service;
        this.register = {
            id: 0,
            name: '',
            email: '',
            password: '',
            cellphone: '',
            university: '',
            cpf: '',
        };
    }
    /**
     * Função para voltar a página de login
     */
    onBackToLogin() {
        this.navController.navigateBack('login');
    }
    onClickToRegister() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(this.register);
            const success = yield this.service.postUser(this.register);
            if (success) {
                console.log('usuário criado com sucesso!');
                // TODO: Criar toast Ctrl e logar direto
                yield this.navController.navigateForward('login');
            }
        });
    }
};
UserRegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-user-register',
        templateUrl: './user-register.page.html',
        styleUrls: ['./user-register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        UserService])
], UserRegisterPage);
export { UserRegisterPage };
//# sourceMappingURL=user-register.page.js.map