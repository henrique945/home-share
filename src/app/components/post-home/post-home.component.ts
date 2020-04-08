import { Component, Input, OnInit } from '@angular/core';
import { PropertyProxy } from '../../models/property.proxy';

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

}
