import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute,
    private authService: AuthenticationService,
    private storage: Storage) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.storage.clear();
  }

  login() {
    console.log('login');
    this.authService.login();
  }

}
