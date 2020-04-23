import { Component, Input, OnInit } from '@angular/core';
import { PropertyProxy } from '../../models/proxies/property.proxy';

@Component({
    selector: 'app-dropdown-home',
    templateUrl: './dropdown-home.component.html',
    styleUrls: [ './dropdown-home.component.scss' ],
})
export class DropdownHomeComponent implements OnInit {

    /**
     * A propriedade do componente
     */
    @Input() public property: PropertyProxy;

    /**
     * Diz se o dropdown está aberto ou fechado
     */
    public isOpen = false;

    constructor() {
    }

    ngOnInit() {
        console.log(this.property);
    }

    /**
     * Função que abre e fecha o dropdown
     */
    public onChangeDropdownState(): void {
        this.isOpen = !this.isOpen;
    }
}
