import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  username = '';
  password = '';

  log = 'username';
  pass = '12345678';

  constructor(private router: Router) {
  }

  login() {
    if (this.username === this.log && this.password === this.pass) {
      this.router.navigate(['/mainpage/home']);
      this.username = this.password = '';
    } else {
      alert('Invalid username or password')
    }
  }

}
