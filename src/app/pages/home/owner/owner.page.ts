import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/property.proxy';
import { ModalController } from '@ionic/angular';
import { ModalRegisterPropertyComponent } from '../../../modals/modal-register-property/modal-register-property.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: [ './owner.page.scss' ],
})
export class OwnerPage implements OnInit {

  /**
   * Lista de propriedades do usuário
   */
  public listPropertyUser: PropertyProxy[] = [
    {
      street: 'Almeida dos passaros',
      township: 'Vila Rica',
      city: 'Salto',
      description: 'Ótimo local para dormir e estar perto da faculdade',
      university: 'FACENS',
      rooms: 2,
      pricePerUser: 500,
      isFull: false,
      userId: 0,
      imageUrl: './assets/imgs/room_image.jpg',
    },
    {
      street: 'Almeida dos passaros2',
      township: 'Vila Rica',
      city: 'Salto',
      description: 'Ótimo local para dormir e estar perto da faculdade',
      university: 'FACENS',
      rooms: 2,
      pricePerUser: 500,
      isFull: false,
      userId: 0,
      imageUrl: './assets/imgs/room_image.jpg',
    },
    {
      street: 'Almeida dos passaros3',
      township: 'Vila Rica',
      city: 'Salto',
      description: 'Ótimo local para dormir e estar perto da faculdade',
      university: 'FACENS',
      rooms: 2,
      pricePerUser: 500,
      isFull: false,
      userId: 0,
      imageUrl: './assets/imgs/room_image.jpg',
    },
  ];

  constructor(
      private readonly modalController: ModalController,
  ) {
  }

  ngOnInit() {
  }

  /**
   * Função que abre uma modal para o usuário registar uma casa ou apartamento
   */
  public async onRegisterNewPlace(): Promise<void> {
    console.log('open modal');

    const modal = await this.modalController.create({
      component: ModalRegisterPropertyComponent,
      cssClass: [ 'modal-register-property' ],
      backdropDismiss: false,
    });
    return await modal.present();
  }
}
