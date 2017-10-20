import {Component, OnInit} from '@angular/core';
import {User} from '../models/user-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  login() {
    console.log('login!');
    this.router.navigateByUrl("welcome");
  }
}
