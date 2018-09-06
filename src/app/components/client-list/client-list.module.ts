import { ClientListComponent } from './client-list.component';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [ClientListComponent],
  // entryComponents: [ ClientListComponent ],
})
export class ClientListModule { }
