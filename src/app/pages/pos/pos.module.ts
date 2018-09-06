import { ClientListComponent } from './../../components/client-list/client-list.component';
import { ClientListModule } from './../../components/client-list/client-list.module';
import { HeaderModule } from './../../components/header/header.module';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PosPage } from './pos.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    // HeaderModule,
    // ClientListModule
  ],
  providers: [
    // HeaderComponent,
    // ClientListComponent
  ]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // exports: [ HeaderComponent ],
  // declarations: [ PosPage ],
  // entryComponents: [ PosPage ]
})
export class PosPageModule {}
