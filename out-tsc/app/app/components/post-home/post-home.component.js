import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let PostHomeComponent = class PostHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
    iWantThisProperty() {
        console.log('Mande uma mensagem para o proprietário.');
        console.log('Tem certeza que quer essa propriedade?');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], PostHomeComponent.prototype, "property", void 0);
PostHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-post-home',
        templateUrl: './post-home.component.html',
        styleUrls: ['./post-home.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PostHomeComponent);
export { PostHomeComponent };
//# sourceMappingURL=post-home.component.js.map