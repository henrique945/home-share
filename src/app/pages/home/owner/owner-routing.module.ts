//#region Imports

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnerPage } from './owner.page';

//#endregion

const routes: Routes = [
  {
    path: '',
    component: OwnerPage
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class OwnerPageRoutingModule {
}
