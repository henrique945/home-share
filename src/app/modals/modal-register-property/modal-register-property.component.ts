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
  public async onCancel(): Promise<void> {
    await this.modalController.dismiss(false);
  }

  /**
   * Botão para registrar uma propriedade
   */
  public async onRegisterProperty(): Promise<void> {
    this.property.rooms = +this.property.rooms;
    await this.service.postProperty(this.property);

    await this.modalController.dismiss(true);
  }

  public cannotAdvance(): boolean {
    if (this.property.description.length === 0 || this.property.street.length === 0 || this.property.city.length === 0 || this.property.township.length === 0 || this.property.rooms === 0 || this.property.pricePerUser === 0) {
      return true;
    }
    return false;
  }
}
