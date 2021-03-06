import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@models/user';

@Injectable()
export class UserService {

  user: User;

  constructor(private router: Router) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      this.user = new User(userData.username);
    }
  }

  init(username: string, token: string): void {
    this.user = new User(username);
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
