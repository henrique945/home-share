//#region  Imports
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
//#endregion
let StorageService = 
/**
 * A classe que representa o serviço que lida com o storage
 */
class StorageService {
    //#region  Constructor
    /**
     * Construtor padrão
     */
    constructor(storage) {
        this.storage = storage;
    }
    //#endregion
    //#region Public Methods
    /**
     * Método que salva um item no storage
     *
     * @param key A chave para acessar o item
     * @param item O item em sí
     */
    setItem(key, item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ready = yield this.storage.ready().catch(() => 'READY_ERROR');
            if (ready === 'READY_ERROR')
                return this.onError();
            const onSuccess = () => ({ success: item });
            return this.storage.set(key, item)
                .then(onSuccess)
                .catch(e => this.onError(e));
        });
    }
    /**
     * Método que obtém um item no storage
     *
     * @param key A chave para acessar o item
     */
    getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ready = yield this.storage.ready().catch(() => 'READY_ERROR');
            if (ready === 'READY_ERROR')
                return this.onError();
            const onSuccess = (item) => ({ success: item });
            return this.storage.get(key)
                .then(onSuccess)
                .catch(e => this.onError(e));
        });
    }
    /**
     * Método que remove um item no storage
     *
     * @param key A chave para acessar o item
     */
    remove(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ready = yield this.storage.ready().catch(() => 'READY_ERROR');
            if (ready === 'READY_ERROR')
                return this.onError();
            const onSuccess = () => ({ success: true });
            return this.storage.remove(key)
                .then(onSuccess)
                .catch(e => this.onError(e));
        });
    }
    /**
     * Método que limpa o storage
     */
    clear() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ready = yield this.storage.ready().catch(() => 'READY_ERROR');
            if (ready === 'READY_ERROR')
                return this.onError();
            const onSuccess = () => ({ success: true });
            return this.storage.clear()
                .then(onSuccess)
                .catch(e => this.onError(e));
        });
    }
    //#endregion
    //#region Private Methods
    /**
     * Método que trata as exceções lançadas
     *
     * @param error O objeto que retorna as informações do erro
     */
    onError(error) {
        if (error && error.message)
            console.error(error && error.message);
        return { error: { message: 'Ocorreu um erro ao salvar as informações, por favor, tente novamente.' } };
    }
};
StorageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
    /**
     * A classe que representa o serviço que lida com o storage
     */
    ,
    tslib_1.__metadata("design:paramtypes", [Storage])
], StorageService);
export { StorageService };
//#endregion
//# sourceMappingURL=storage.service.js.map