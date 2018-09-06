import { HeaderComponent } from './../../components/header/header.component';
import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.page.html',
  styleUrls: ['./pos.page.scss'],
})
export class PosPage implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute, injector: Injector) {
    // // Convert `HeaderComponent` to a custom element.
    // const headerElement = createCustomElement(HeaderComponent, {injector});
    // // Register the custom element with the browser.
    // customElements.define('app-header', headerElement);
  }

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }

  logout() {
    console.log('logout');
  }

}
