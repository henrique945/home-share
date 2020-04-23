import { Component, Input, OnInit } from '@angular/core';
import { PropertyProxy } from '../../models/proxies/property.proxy';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: [ './post-home.component.scss' ],
})
export class PostHomeComponent implements OnInit {
  /**
   * A propriedade do componente
   */
  @Input() public property: PropertyProxy;

  constructor() {
  }

  ngOnInit() {

  }

  public iWantThisProperty(): void {
    console.log('Mande uma mensagem para o proprietário.');
    console.log('Tem certeza que quer essa propriedade?');
  }
}
