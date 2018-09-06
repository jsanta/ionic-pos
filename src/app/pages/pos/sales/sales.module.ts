import { ClientListModule } from './../../../components/client-list/client-list.module';
import { ComponentsModule } from './../../../components/components.module';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPage } from './sales.page';
import { HeaderModule } from '../../../components/header/header.module';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from '../../../components/header/header.component';
import { ClientListComponent } from '../../../components/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    component: SalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  providers: [],
  declarations: [SalesPage]
})
export class SalesPageModule { }
