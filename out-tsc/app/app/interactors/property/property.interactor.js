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
};
PropertyInteractor = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpAsyncService])
], PropertyInteractor);
export { PropertyInteractor };
//# sourceMappingURL=property.interactor.js.map