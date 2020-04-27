import { Injectable } from '@angular/core';
import { AsyncResult, HttpAsyncService } from '../../services/http-async.service.ts/http-async.service';
import { PropertyProxy } from '../../models/proxies/property.proxy';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class PropertyInteractor {

  constructor(
      private readonly http: HttpAsyncService,
  ) { }

  /**
   * Busca todas as propriedades
   */
  public async getAllProperties(): Promise<AsyncResult<PropertyProxy[]>> {
    return await this.http.get<PropertyProxy[]>(environment.routes.property);
  }

}
