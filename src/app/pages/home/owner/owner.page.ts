import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/property.proxy';
import { ModalController, NavController } from '@ionic/angular';
import { ModalRegisterPropertyComponent } from '../../../modals/modal-register-property/modal-register-property.component';
import { SwipeEvent } from 'ng-swipe';

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

  /**
   * Variável que calcula o valor do swipe feito
   */
  public startSwipeValue: number = 0;

  constructor(
      private readonly modalController: ModalController,
      private readonly navController: NavController,
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.startSwipeValue = 0;
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

  /**
   * A função que controla o começo do swipe
   */
  public onSwipeMove(event: SwipeEvent) {
    console.log(`swipe direction: ${ event.direction }`);
    console.log(`swipe distance: ${ event.distance }`);
    if (this.startSwipeValue === 0) {
      this.startSwipeValue = Math.abs(event.distance);
    }
  }

  /**
   * Função que controla o final do swipe e se deve executar uma ação
   */
  public onSwipeEnd(event: SwipeEvent) {
    console.log(`swipe direction end: ${ event.direction }`);
    console.log(`swipe distance end: ${ event.distance }`);

    if (Math.abs(event.distance) - this.startSwipeValue > 30) {
      console.log('left page');
      this.navController.navigateForward('/home/user');
    }
  }
}
