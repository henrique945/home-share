import { Injectable } from '@angular/core';
import { PropertyInteractor } from '../../interactors/property/property.interactor';
import { PropertyProxy } from '../../models/proxies/property.proxy';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root',
})

export class PropertyService {

  constructor(
      private readonly interactor: PropertyInteractor,
      private readonly helper: HelperService,
  ) {
  }

  /**
   * Busca todas as propriedades
   */
  public async getAllProperties(): Promise<PropertyProxy[]> {
    const { error, success } = await this.interactor.getAllProperties();

    if (error) {
      console.log(error.error.message);
      await this.helper.showToast(error.error.message, 3000);
      return;
    }

    return success;
  }

  /**
   * Cadastra um propriedade
   */
  public async postProperty(payload: PropertyProxy): Promise<unknown> {
    const { error, success } = await this.interactor.postProperty(payload);

    if (error) {
      console.log(error.error.message);
      await this.helper.showToast(error.error.message, 3000);
      return;
    }

    await this.helper.showToast('Propriedade criada com sucesso!', 3000);
  }

  /**
   * Busca uma propriedade por id do usuário
   */
  public async getProportiesByUserId(userId: number): Promise<PropertyProxy[]> {
    const { error, success } = await this.interactor.getProportiesByUserId(userId);

    if (error) {
      console.log(error.error.message);
      await this.helper.showToast(error.error.message, 3000);
      return;
    }

    return success;
  }

}
