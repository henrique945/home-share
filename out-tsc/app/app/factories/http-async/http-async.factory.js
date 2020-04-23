//#region Imports
import * as tslib_1 from "tslib";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
//#endregion
/**
 * A factory para a criação do serviço de Http
 */
export function httpAsyncFactory(http, helper, storage) {
    const httpAsync = new HttpAsyncService(http);
    httpAsync.setBaseUrl(environment.apiBaseUrl);
    httpAsync.setBeforeValidations(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (helper.isOffline()) {
            return {
                error: new HttpErrorResponse({
                    status: 503,
                    error: new Error('Você não está conectado a internet.')
                })
            };
        }
        return {};
    }));
    httpAsync.setLoadHeaders(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { error, success } = yield storage.getItem(environment.keys.token);
        let key;
        if (error || success === null) {
            return new HttpHeaders();
        }
        key = success;
        // TODO: Verificar aqui a data de expiração do Token, e ver se ainda é válido
        return new HttpHeaders({ Authorization: key });
    }));
    httpAsync.getOnAsyncResultError().subscribe((error) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.debug(error);
    }));
    return httpAsync;
}
//# sourceMappingURL=http-async.factory.js.map