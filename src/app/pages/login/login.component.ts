import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  alertLogin: boolean = false;

  constructor(private _router:Router) {
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this._router.navigate(['/admin']);
    } else {
      this.alertLogin = true;
      setTimeout(()=> {
        this.alertLogin = false;
      }, 1000)
      console.log(this.username, this.password)
    }
  }

}
