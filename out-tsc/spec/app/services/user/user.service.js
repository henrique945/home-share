import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UserInteractor } from '../../interactors/user/user.interactor';
import { StorageService } from '../storage/storage.service';
import { environment } from '../../../environments/environment';
let UserService = class UserService {
    constructor(interactor, storage) {
        this.interactor = interactor;
        this.storage = storage;
    }
    /**
     * Autentica o usuário para logar
     */
    autenticate(payloadLogin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.autenticate(payloadLogin);
            if (error) {
                console.log(error.message);
                return false;
            }
            yield this.storage.setItem(environment.keys.token, success.token);
            return success;
        });
    }
    /**
     * Cria um usuário
     */
    postUser(payloadRegister) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.postUser(payloadRegister);
            if (error) {
                console.log(error.error);
                return false;
            }
            return success;
        });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [UserInteractor,
        StorageService])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map