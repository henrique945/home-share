//#region Imports
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//#endregion
//#region Class
/**
 * A classe que representa um serviço responsável por lidar com as chamadas assincronas em um Endpoint
 */
let HttpAsyncService = class HttpAsyncService {
    //#region Construtor
    /**
     * Construtor padrão
     *
     * @param http Modulo HTTP
     */
    constructor(http) {
        this.http = http;
        this.onAsyncResultError = new Subject();
    }
    //#endregion
    //#region Public Methods
    /**
     * Método que seta uma validação a ser executado antes de cada requisição
     */
    setBeforeValidations(beforeValidation) {
        this.beforeValidations = beforeValidation;
    }
    /**
     * Método que seta uma validação a ser executado antes de cada requisição
     */
    setLoadHeaders(loadHeader) {
        this.loadHeaders = loadHeader;
    }
    /**
     * Método que retorna o evento chamado ao ocorrer um erro com a chamada API
     */
    getOnAsyncResultError() {
        return this.onAsyncResultError;
    }
    /**
     * Método que define uma nova base de url para as chamadas
     *
     * @param newBaseUrl O novo url
     */
    setBaseUrl(newBaseUrl) {
        this.baseUrl = newBaseUrl;
    }
    //#endregion
    //#region Private Methods
    /**
     * Converte um resultado para AsyncResult para quando der certo
     *
     * @param result O resultado obtido
     */
    success(result) {
        return {
            success: result
        };
    }
    /**
     * Encapsula o erro no AsyncResult
     *
     * @param error O erro enviado pelo servidor
     */
    error(error) {
        this.onAsyncResultError.next(error);
        return {
            error: error
        };
    }
    /**
     * Método que obtém os headers
     */
    getHeaders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.loadHeaders === undefined)
                return undefined;
            const result = yield this.loadHeaders();
            if (result === undefined)
                return undefined;
            return { headers: result };
        });
    }
    //#endregion
    //#region Async Restfull Methods
    /**
     * Envia uma requisição com o método GET de forma assincrona
     *
     * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
     */
    get(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.beforeValidations) {
                const validationResult = yield this.beforeValidations();
                if (validationResult.error !== undefined)
                    return this.error(validationResult.error);
            }
            const headers = yield this.getHeaders();
            return yield this.http.get(this.baseUrl + url, headers).toPromise()
                .then((data) => {
                return this.success(data);
            })
                .catch((error) => {
                return this.error(error);
            })
                .then((result) => {
                return result;
            });
        });
    }
    /**
     * Envia uma requisição com o método POST
     *
     * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
     * @param payload Informações a serem enviadas para o servidor
     */
    post(url, payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.beforeValidations) {
                const validationResult = yield this.beforeValidations();
                if (validationResult.error !== undefined)
                    return this.error(validationResult.error);
            }
            const headers = yield this.getHeaders();
            return yield this.http.post(this.baseUrl + url, payload, headers).toPromise()
                .then((data) => {
                return this.success(data);
            })
                .catch((error) => {
                return this.error(error);
            })
                .then((result) => {
                return result;
            });
        });
    }
    /**
     * Envia uma requisição com o método PUT
     *
     * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
     * @param payload Informações a serem enviadas para o servidor
     */
    put(url, payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.beforeValidations) {
                const validationResult = yield this.beforeValidations();
                if (validationResult.error !== undefined)
                    return this.error(validationResult.error);
            }
            const headers = yield this.getHeaders();
            return yield this.http.put(this.baseUrl + url, payload, headers).toPromise()
                .then((data) => {
                return this.success(data);
            })
                .catch((error) => {
                return this.error(error);
            })
                .then((result) => {
                return result;
            });
        });
    }
    /**
     * Envia uma requisição com o método DELETE
     *
     * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
     */
    delete(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.beforeValidations) {
                const validationResult = yield this.beforeValidations();
                if (validationResult.error !== undefined)
                    return this.error(validationResult.error);
            }
            const headers = yield this.getHeaders();
            return yield this.http.delete(this.baseUrl + url, headers).toPromise()
                .then((data) => {
                return this.success(data);
            })
                .catch((error) => {
                return this.error(error);
            })
                .then((result) => {
                return result;
            });
        });
    }
};
HttpAsyncService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], HttpAsyncService);
export { HttpAsyncService };
//#endregion
//# sourceMappingURL=http-async.service.js.map