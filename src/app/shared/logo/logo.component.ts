import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: [ './logo.component.scss' ],
})
export class LogoComponent {

  constructor(
      private readonly storage: StorageService,
      private readonly nav: NavController,
  ) {
  }

  /**
   * Método para logout do app e limpar o Storage Service
   */
  public async onLogout(): Promise<void> {
    await this.storage.clear();
    await this.nav.navigateBack('login');
  }
}
