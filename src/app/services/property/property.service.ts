import { Injectable } from '@angular/core';
import { PropertyInteractor } from '../../interactors/property/property.interactor';
import { PropertyProxy } from '../../models/proxies/property.proxy';

@Injectable({
  providedIn: 'root',
})

export class PropertyService {

  constructor(
      private readonly interactor: PropertyInteractor,
  ) { }

  /**
   * Busca todas as propriedades
   */
  public async getAllProperties(): Promise<PropertyProxy[] | boolean> {
    const { error, success } = await this.interactor.getAllProperties();

    if (error) {
      console.log(error.error);
      return false;
    }

    return success;
  }

}
