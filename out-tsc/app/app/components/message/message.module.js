import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { IonicModule } from '@ionic/angular';
let MessageComponentModule = class MessageComponentModule {
};
MessageComponentModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            IonicModule,
        ],
        exports: [
            MessageComponent,
        ],
        declarations: [
            MessageComponent,
        ],
    })
], MessageComponentModule);
export { MessageComponentModule };
//# sourceMappingURL=message.module.js.map