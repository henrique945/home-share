import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UserInteractor } from '../../interactors/user/user.interactor';
let UserService = class UserService {
    constructor(interactor) {
        this.interactor = interactor;
    }
    /**
     * Autentica o usuário para logar
     */
    autenticate(payloadLogin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.autenticate(payloadLogin);
            if (error) {
                console.log(error.message);
            }
            return success;
        });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [UserInteractor])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map