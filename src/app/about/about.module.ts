import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutPageModule {}
