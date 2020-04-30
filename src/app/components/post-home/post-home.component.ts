import { Component, Input } from '@angular/core';
import { PropertyProxy } from '../../models/proxies/property.proxy';
import { ModalController } from '@ionic/angular';
import { ModalMessageComponent } from '../../modals/modal-message/modal-message.component';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: [ './post-home.component.scss' ],
})
export class PostHomeComponent {
  /**
   * A propriedade do componente
   */
  @Input() public property: PropertyProxy;

  constructor(
      private readonly modalController: ModalController,
  ) {
  }

  public async iWantThisProperty(): Promise<void> {

    const modal = await this.modalController.create({
      component: ModalMessageComponent,
      cssClass: [ 'modal-message' ],
      componentProps: { property: this.property },
      backdropDismiss: false,
    });
    return await modal.present();

    console.log('Mande uma mensagem para o proprietário.');
    console.log('Tem certeza que quer essa propriedade?');
  }
}
