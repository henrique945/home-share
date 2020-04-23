//#region  Imports
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { LoadingController, ToastController } from '@ionic/angular';
//#endregion
let HelperService = 
/**
 * A classe que representa o serviço que contém algumas funcionalidades padrões
 */
class HelperService {
    //#region  Constructor
    /**
     * Construtor padrão
     */
    constructor(toast, network, loading) {
        this.toast = toast;
        this.network = network;
        this.loading = loading;
    }
    //#endregion
    //#region Public Methods
    /**
     * Método que exibe uma mensagem toast na tela
     *
     * @param message As informações da mensagem
     * @param duration A duração da mensagem
     * @param options As opções do toast
     */
    showToast(message, duration = 5000, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const overlay = yield this.toast.create(Object.assign({ message,
                duration }, !!options && Object.assign({}, options)));
            yield overlay.present();
        });
    }
    /**
     * Método que verifica se o usuário está offline
     */
    isOffline() {
        return [this.network.Connection.NONE, this.network.Connection.UNKNOWN].includes(this.network.type);
    }
    /**
     * Método que exibe o componente de loading e retorna a referência para dissipa-lo depois
     *
     * @param options As opções para o loading
     */
    getLoadingPresented(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.loading.create(Object.assign({ cssClass: 'loading--rounded' }, options)).then((loading) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield loading.present();
                setTimeout(() => loading.dismiss(), 10000);
                return loading;
            }));
        });
    }
};
HelperService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    })
    /**
     * A classe que representa o serviço que contém algumas funcionalidades padrões
     */
    ,
    tslib_1.__metadata("design:paramtypes", [ToastController,
        Network,
        LoadingController])
], HelperService);
export { HelperService };
//# sourceMappingURL=helper.service.js.map