import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(): void {
    // Call the login method from the authentication service
    if (this.authService.login(this.username, this.password)) {
      this.authService.setLoggedIn(true)
      // Redirect to the next path only if login is successful
      this.router.navigate(['/create']);
    } else {
      alert('Username: admin, Password: admin123');
    }
  }


  logout(): void {
    // Call the logout method from the authentication service
    this.authService.logout();
    // Redirect to the home page after logout
    this.router.navigate(['/']);
  }
}
