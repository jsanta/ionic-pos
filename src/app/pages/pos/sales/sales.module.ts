import { ComponentsModule } from './../../../components/components.module';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPage } from './sales.page';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren: './favorites/favorites.module#FavoritesPageModule'
  },
  {
    path: 'products',
    loadChildren: './product-search/product-search.module#ProductSearchPageModule'
  },
  {
    path: 'clients',
    loadChildren: './client-search/client-search.module#ClientSearchPageModule'
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
  declarations: []
})
export class SalesPageModule { }
