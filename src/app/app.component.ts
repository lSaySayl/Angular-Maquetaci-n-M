import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cesde';

  constructor(private _router:Router) {

  }

  isInAdminRoute(): boolean {
    return this._router.url === '/admin';
  }
}
