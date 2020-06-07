import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { NavController } from '@ionic/angular';
let LogoComponent = class LogoComponent {
    constructor(storage, nav) {
        this.storage = storage;
        this.nav = nav;
    }
    /**
     * Método para logout do app e limpar o Storage Service
     */
    onLogout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.storage.clear();
            yield this.nav.navigateBack('login');
        });
    }
};
LogoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-logo',
        templateUrl: './logo.component.html',
        styleUrls: ['./logo.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [StorageService,
        NavController])
], LogoComponent);
export { LogoComponent };
//# sourceMappingURL=logo.component.js.map