import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { environment } from '../../../environments/environment';
let UserInteractor = class UserInteractor {
    constructor(http) {
        this.http = http;
    }
    /**
     * Autentica o usuário para logar
     */
    autenticate(payloadLogin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(environment.routes.auth, payloadLogin);
        });
    }
    /**
     * Cria um usuário
     */
    postUser(payloadRegister) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(environment.routes.user, payloadRegister);
        });
    }
    /**
     * Busca as informações do usuário logado
     */
    getMyInfo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(environment.routes.userMe);
        });
    }
};
UserInteractor = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpAsyncService])
], UserInteractor);
export { UserInteractor };
//# sourceMappingURL=user.interactor.js.map