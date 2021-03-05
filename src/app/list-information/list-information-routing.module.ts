import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInformationPage } from './list-information.page';

const routes: Routes = [
  {
    path: '',
    component: ListInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListInformationPageRoutingModule {}
