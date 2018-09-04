import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PosPage } from './pos.page';

const routes: Routes = [
  {
    path: '',
    component: PosPage
  },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PosPage]
})
export class PosPageModule {}
