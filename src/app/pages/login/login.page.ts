import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }

  login() {
    console.log('login');
    this.authService.login();
  }

}
