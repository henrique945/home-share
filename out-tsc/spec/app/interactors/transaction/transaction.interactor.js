import * as tslib_1 from "tslib";
import { HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
let TransactionInteractor = class TransactionInteractor {
    constructor(http) {
        this.http = http;
    }
    /**
     * Cria uma transação
     */
    createTransaction(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.post(environment.routes.transaction, payload);
        });
    }
    /**
     * Busca quantas mensagem aquele usuário tem pelo seu id
     */
    countTransactionByUserId(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // TODO: fazer um sistema de mensagens melhor
            return yield this.http.get(`${environment.routes.transaction}/userId/${userId}/count`);
        });
    }
    /**
     * Busca as transações daquele usuário
     */
    getUserTransaction(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`${environment.routes.transaction}/userId/${userId}`);
        });
    }
    /**
     * Atualiza uma transação
     */
    updateTransaction(payload, transactionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.put(`${environment.routes.transaction}/${transactionId}`, payload);
        });
    }
};
TransactionInteractor = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpAsyncService])
], TransactionInteractor);
export { TransactionInteractor };
//# sourceMappingURL=transaction.interactor.js.map