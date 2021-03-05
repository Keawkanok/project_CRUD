import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListInformationPageModule } from '../../app/list-information/list-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ListInformationPageModule,
    ReactiveFormsModule,

  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
