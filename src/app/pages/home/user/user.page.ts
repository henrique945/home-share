import { Component, OnInit } from '@angular/core';
import { PropertyProxy } from '../../../models/property.proxy';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: [ './user.page.scss' ],
})
export class UserPage implements OnInit {

  /**
   * Lista de propriedades
   */
  public listProperty: PropertyProxy[] = [
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
  ];

  /**
   * Variável que guarda a faculdade a ser pesquisada
   */
  public searchUniversity: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  public updateUniversity(): void {
    console.log(this.searchUniversity);
  }

}
