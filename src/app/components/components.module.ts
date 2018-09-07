import { HeaderModule } from './header/header.module';
import { ClientListModule } from './client-list/client-list.module';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientItemComponent } from './client-item/client-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NumberKeysComponent } from './number-keys/number-keys.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ClientItemComponent,
    ClientListComponent,
    ProductItemComponent,
    ProductListComponent,
    HeaderComponent,
    NumberKeysComponent,
    ClientSearchComponent,
    ProductSearchComponent,
    FavoriteProductsComponent
  ],
  exports: [
    ClientItemComponent,
    ClientListComponent,
    ProductItemComponent,
    ProductListComponent,
    HeaderComponent,
    NumberKeysComponent,
    ClientSearchComponent,
    ProductSearchComponent,
    FavoriteProductsComponent
  ]

})
export class ComponentsModule { }
