import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TransactionInteractor } from '../../interactors/transaction/transaction.interactor';
import { HelperService } from '../helper/helper.service';
let TransactionService = class TransactionService {
    constructor(interactor, helper) {
        this.interactor = interactor;
        this.helper = helper;
    }
    /**
     * Cria uma transação
     */
    createTransaction(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.createTransaction(payload);
            if (error) {
                console.log(error.error.message);
                yield this.helper.showToast(error.error.message, 3000);
                return;
            }
            yield this.helper.showToast('Mensagem enviada com sucesso!\nAguarde a resposta do proprietário.', 3000);
        });
    }
    /**
     * Busca quantas transações um usuário possui
     */
    transactionCount(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.countTransactionByUserId(userId);
            if (error) {
                console.log(error.error.message);
                return;
            }
            return success;
        });
    }
    /**
     * Busca as transações daquele usuário
     */
    getUserTransaction(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.getUserTransaction(userId);
            if (error) {
                console.log(error.error.message);
                return;
            }
            return success;
        });
    }
    /**
     * Atualiza a transação
     */
    updateTransaction(payload, transactionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { error, success } = yield this.interactor.updateTransaction(payload, transactionId);
            if (error) {
                console.log(error.error.message);
                return;
            }
            return success;
        });
    }
};
TransactionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [TransactionInteractor,
        HelperService])
], TransactionService);
export { TransactionService };
//# sourceMappingURL=transaction.service.js.map