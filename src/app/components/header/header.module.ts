import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './header.component';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
})
export class HeaderModule {

}
