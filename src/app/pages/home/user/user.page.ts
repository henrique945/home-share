//#region Imports

import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/proxies/property.proxy';
import { SwipeEvent } from 'ng-swipe';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../../../services/property/property.service';

//#endregion

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  //#region Constructors

  constructor(
    private readonly navController: NavController,
    private readonly propertyService: PropertyService,
  ) {
  }

  //#endregion

  //#region Properties

  /**
   * Lista de propriedades
   */
  public listProperty: PropertyProxy[] = [];

  /**
   * Variável que guarda a faculdade a ser pesquisada
   */
  public searchUniversity: string = '';

  /**
   * Variável que calcula o valor do swipe feito
   */
  public startSwipeValue: number = 0;

  /**
   * As cidades dos propriedades que vieram da API
   */
  public listCities: string[] = [];

  //#endregion

  //#region Functions

  // TODO: add refresher
  public async ngOnInit(): Promise<void> {
    const result = await this.propertyService.getAllProperties();

    if (!result)
      return;

    this.listProperty = result;

    // separa as cidades das propriedades sem repeti-las
    let already = false;
    for (const property of this.listProperty) {
      property.city = property.city.toUpperCase();
      already = false;

      for (const city of this.listCities)
        if (city === property.city)
          already = true;

      if (!already)
        this.listCities.push(property.city);
    }
  }

  /**
   * Função que detecta mudança na busca por faculdades
   */
  public updateUniversity(): void {
    console.log(this.searchUniversity);
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
    if (event.distance - this.startSwipeValue > 30 && event.direction === 'x') {
      console.log('left page');
      this.navController.navigateForward('/home/owner');
    }
  }

  //#endregion

}
