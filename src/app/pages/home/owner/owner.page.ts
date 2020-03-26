import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/property.proxy';

@Component({
    selector: 'app-owner',
    templateUrl: './owner.page.html',
    styleUrls: [ './owner.page.scss' ],
})
export class OwnerPage implements OnInit {

    constructor() {
    }

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
  ]

  ngOnInit() {
    }

    /**
     * Função que abre uma modal para o usuário registar uma casa ou apartamento
     */
    public onRegisterNewPlace(): void {
        console.log('open modal');
    }
}
