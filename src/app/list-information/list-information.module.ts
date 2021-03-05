import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInformationPageRoutingModule } from './list-information-routing.module';

import { ListInformationPage } from './list-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListInformationPageRoutingModule,
  ],
  exports: [
    ListInformationPage,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListInformationPage],
})
export class ListInformationPageModule {}
