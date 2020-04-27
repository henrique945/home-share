import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PropertyInteractor } from '../../interactors/property/property.interactor';
let PropertyService = class PropertyService {
    constructor(interactor) {
        this.interactor = interactor;
    }
    /**
     * Busca todas as propriedades
     */
    getAllProperties() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.getAllProperties();
            if (error) {
                console.log(error.error);
                return false;
            }
            return success;
        });
    }
};
PropertyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [PropertyInteractor])
], PropertyService);
export { PropertyService };
//# sourceMappingURL=property.service.js.map