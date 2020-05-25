import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/proxies/property.proxy';
import { SwipeEvent } from 'ng-swipe';
import { NavController } from '@ionic/angular';
import { PropertyService } from '../../../services/property/property.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: [ './user.page.scss' ],
})
export class UserPage implements OnInit {

  /**
   * Lista de propriedades
   */
  public listProperty: PropertyProxy[] = [];

  // https://i.pinimg.com/originals/27/e2/74/27e2744ddffaba310dec0d76b3221f04.jpg

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

  constructor(
      private readonly navController: NavController,
      private readonly propertyService: PropertyService,
  ) {
  }

  public async ngOnInit(): Promise<void> {
    const result = await this.propertyService.getAllProperties();

    if (!result) {
      return;
    }

    this.listProperty = result;

    // separa as cidades das propriedades sem repeti-las
    let already = false;
    for (let i = 0; i < this.listProperty.length; i++) {
      this.listProperty[i].city = this.listProperty[i].city.toUpperCase();
      already = false;

      for (let j = 0; j < this.listCities.length; j++) {
        if (this.listCities[j] === this.listProperty[i].city) {
          already = true;
        }
      }

      if (!already) {
        this.listCities.push(this.listProperty[i].city);
      }
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
    console.log(`swipe direction: ${ event.direction }`);
    console.log(`swipe distance: ${ event.distance }`);
    if (this.startSwipeValue === 0) {
      this.startSwipeValue = event.distance;
    }
  }

  /**
   * Função que controla o final do swipe e se deve executar uma ação
   */
  public onSwipeEnd(event: SwipeEvent) {
    console.log(`swipe direction end: ${ event.direction }`);
    console.log(`swipe distance end: ${ event.distance }`);

    if (event.distance - this.startSwipeValue > 30 && event.direction === 'x') {
      console.log('left page');
      this.navController.navigateForward('/home/owner');
    }
  }
}
