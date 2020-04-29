import { Injectable } from '@angular/core';
import { PropertyInteractor } from '../../interactors/property/property.interactor';
import { PropertyProxy } from '../../models/proxies/property.proxy';

@Injectable({
  providedIn: 'root',
})

export class PropertyService {

  constructor(
      private readonly interactor: PropertyInteractor,
  ) {
  }

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

  /**
   * Cadastra um propriedade
   */
  public async postProperty(payload: PropertyProxy): Promise<unknown> {
    const { error, success } = await this.interactor.postProperty(payload);

    if (error) {
      console.log(error.message);
      return;
    }
  }

  /**
   * Busca uma propriedade por id do usuário
   */
  public async getProportiesByUserId(userId: number): Promise<PropertyProxy[]> {
    const { error, success } = await this.interactor.getProportiesByUserId(userId);

    if (error) {
      console.log(error.message);
      return;
    }

    return success;
  }

}
