import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PropertyService } from '../../services/property/property.service';
import { PropertyProxy } from '../../models/proxies/property.proxy';
import { StorageService } from '../../services/storage/storage.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-modal-register-property',
  templateUrl: './modal-register-property.component.html',
  styleUrls: [ './modal-register-property.component.scss' ],
})
export class ModalRegisterPropertyComponent implements OnInit {

  /**
   * Objeto que guarda a propriedade
   */
  public property: PropertyProxy = {
    street: '',
    township: '',
    city: '',
    description: '',
    listImages: [ 'https://i.pinimg.com/originals/27/e2/74/27e2744ddffaba310dec0d76b3221f04.jpg' ],
    pricePerUser: 0,
    rooms: 0,
    isFull: false,
    university: '',
    userOwnerId: 0,
  };

  constructor(
      private readonly modalController: ModalController,
      private readonly service: PropertyService,
      private readonly storage: StorageService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    const { error, success } = await this.storage.getItem(environment.keys.user);

    if (error) {
      console.log(error.message);
      return;
    }

    this.property.userOwnerId = success.id;
  }

  /**
   * Botão de cancelar o cadastro de propriedade
   */
  public onCancel(): void {
    this.modalController.dismiss();
  }

  /**
   * Botão para registrar uma propriedade
   */
  public async onRegisterProperty(): Promise<void> {
    await this.service.postProperty(this.property);
  }
}
