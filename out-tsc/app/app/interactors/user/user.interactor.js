import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';
let UserInteractor = class UserInteractor {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    /**
     * Autentica o usuário para logar
     */
    autenticate(payloadLogin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(environment.routes.auth, payloadLogin);
        });
    }
};
UserInteractor = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpAsyncService,
        StorageService])
], UserInteractor);
export { UserInteractor };
//# sourceMappingURL=user.interactor.js.map