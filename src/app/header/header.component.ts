import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showCreateLink: boolean = false;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to route changes to update the visibility of the "CREATE" link
    this.router.events.subscribe(() => {
      this.updateCreateLinkVisibility();
    });

    // Initial update when the component is first loaded
    this.updateCreateLinkVisibility();
  }

  // Update the visibility of the "CREATE" link based on the current route
  updateCreateLinkVisibility() {
    // Check if the current route is not "/create"
    this.showCreateLink = this.router.url !== '/create';
  }

  logout(): void {
    // Call the logout method from the authentication service
    this.authService.logout();
    // Redirect to the home page after logout
    this.router.navigate(['/']);
  }

  // Template references for the logged-in/logged-out state
  loginTemplateRef: any;
  loggedInTemplateRef: any;
}
