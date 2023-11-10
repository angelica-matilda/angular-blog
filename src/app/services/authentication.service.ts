import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private presetUsername = 'admin';
  private presetPassword = 'admin123';
  private loggedIn: boolean = false;

  login(username: string, password: string): boolean {
    // Check if the provided credentials match the preset values
    const isValid = username === this.presetUsername && password === this.presetPassword;

    if (isValid) {
      this.loggedIn = true;
    }

    return isValid;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }
}
