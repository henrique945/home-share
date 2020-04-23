import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let DropdownHomeComponent = class DropdownHomeComponent {
    constructor() {
        /**
         * Diz se o dropdown está aberto ou fechado
         */
        this.isOpen = false;
    }
    ngOnInit() {
        console.log(this.property);
    }
    /**
     * Função que abre e fecha o dropdown
     */
    onChangeDropdownState() {
        this.isOpen = !this.isOpen;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], DropdownHomeComponent.prototype, "property", void 0);
DropdownHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dropdown-home',
        templateUrl: './dropdown-home.component.html',
        styleUrls: ['./dropdown-home.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DropdownHomeComponent);
export { DropdownHomeComponent };
//# sourceMappingURL=dropdown-home.component.js.map