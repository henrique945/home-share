import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { environment } from '../../../environments/environment';
let PropertyInteractor = class PropertyInteractor {
    constructor(http) {
        this.http = http;
    }
    /**
     * Busca todas as propriedades
     */
    getAllProperties() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(environment.routes.property);
        });
    }
    /**
     * Cadastra um propriedade
     */
    postProperty(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(environment.routes.property, payload);
        });
    }
    /**
     * Busca as propriedades por id do usuário
     */
    getProportiesByUserId(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`${environment.routes.property}?userId=${userId}`);
        });
    }
};
PropertyInteractor = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpAsyncService])
], PropertyInteractor);
export { PropertyInteractor };
//# sourceMappingURL=property.interactor.js.map