import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
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
export class MessageComponentModule {
}
