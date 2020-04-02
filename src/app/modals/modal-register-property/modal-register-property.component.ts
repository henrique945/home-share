import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-register-property',
  templateUrl: './modal-register-property.component.html',
  styleUrls: ['./modal-register-property.component.scss'],
})
export class ModalRegisterPropertyComponent implements OnInit {

  constructor(
      private readonly modalController: ModalController,
  ) { }

  ngOnInit() {}

  public onCancel(): void {
    this.modalController.dismiss();
  }

}
