import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.css']
})
export class ToTopButtonComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop(): void {
    this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
}
