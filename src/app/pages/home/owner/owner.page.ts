//#region Imports

import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/proxies/property.proxy';
import { ModalController, NavController } from '@ionic/angular';
import { ModalRegisterPropertyComponent } from '../../../modals/modal-register-property/modal-register-property.component';
import { SwipeEvent } from 'ng-swipe';
import { PropertyService } from '../../../services/property/property.service';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../../services/storage/storage.service';

//#endregion

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: [ './owner.page.scss' ],
})
export class OwnerPage implements OnInit {

  //#region Constructors

  constructor(
      private readonly modalController: ModalController,
      private readonly navController: NavController,
      private readonly propertyService: PropertyService,
      private readonly storage: StorageService,
  ) {
  }

  //#endregion

  //#region Properties

  /**
   * Lista de propriedades do usuário
   */
  public listPropertyUser: PropertyProxy[] = [];

  /**
   * Variável que calcula o valor do swipe feito
   */
  public startSwipeValue: number = 0;

  /**
   * Diz se o usuário tem propriedades cadastradas
   */
  public noRegisterProperty: boolean = false;

  //#endregion

  //#region Functions

  public async ngOnInit(): Promise<void> {
    await this.getPropertyByUser();
  }

  ionViewDidEnter() {
    this.startSwipeValue = 0;
  }

  /**
   * Função que busca as propriedades daquele usuário cadastradas na API
   */
  public async getPropertyByUser(): Promise<void> {
    const { error, success } = await this.storage.getItem<any>(environment.keys.user);

    if (error) {
      console.log(error.message);
      return;
    }

    const result = await this.propertyService.getProportiesByUserId(success.id);

    if (result) {
      this.listPropertyUser = result;
    }

    this.noRegisterProperty = this.listPropertyUser.length === 0;
  }

  /**
   * Função que abre uma modal para o usuário registar uma casa ou apartamento
   */
  public async onRegisterNewPlace(): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalRegisterPropertyComponent,
      cssClass: [ 'modal-register-property' ],
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((data) => {
      if (data != null) {
        if (data.data === true) {
          this.getPropertyByUser();
        }
      }
    });

    return await modal.present();
  }

  /**
   * A função que controla o começo do swipe
   */
  public onSwipeMove(event: SwipeEvent) {
    // console.log(`swipe direction: ${ event.direction }`);
    // console.log(`swipe distance: ${ event.distance }`);
    if (this.startSwipeValue === 0) {
      this.startSwipeValue = event.distance;
    }
  }

  /**
   * Função que controla o final do swipe e se deve executar uma ação
   */
  public onSwipeEnd(event: SwipeEvent) {
    // console.log(`swipe direction end: ${ event.direction }`);
    // console.log(`swipe distance end: ${ event.distance }`);
    if (event.distance - this.startSwipeValue < -30 && event.direction === 'x') {
      console.log('left page');
      this.navController.navigateForward('/home/user');
    }
  }

  //#endregion

}
