import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PropertyInteractor } from '../../interactors/property/property.interactor';
import { HelperService } from '../helper/helper.service';
let PropertyService = class PropertyService {
    constructor(interactor, helper) {
        this.interactor = interactor;
        this.helper = helper;
    }
    /**
     * Busca todas as propriedades
     */
    getAllProperties() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.getAllProperties();
            if (error) {
                console.log(error.error.message);
                yield this.helper.showToast(error.error.message, 3000);
                return;
            }
            return success;
        });
    }
    /**
     * Cadastra um propriedade
     */
    postProperty(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.postProperty(payload);
            if (error) {
                console.log(error.error.message);
                yield this.helper.showToast(error.error.message, 3000);
                return;
            }
            yield this.helper.showToast('Propriedade criada com sucesso!', 3000);
        });
    }
    /**
     * Busca uma propriedade por id do usuário
     */
    getProportiesByUserId(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.getProportiesByUserId(userId);
            if (error) {
                console.log(error.error.message);
                yield this.helper.showToast(error.error.message, 3000);
                return;
            }
            return success;
        });
    }
};
PropertyService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [PropertyInteractor,
        HelperService])
], PropertyService);
export { PropertyService };
//# sourceMappingURL=property.service.js.map