import { Component } from '@angular/core';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  template: `
    <a 
      routerLink="/contact" 
      class="sticky-cta-btn btn btn-primary btn-lg fw-bold shadow d-none d-md-block floating-button" 
      tabindex="-1" aria-hidden="true"
    >
      <i class="bi bi-search"></i> Free Website Audit
    </a>
  `,
  styleUrls: ['./sticky-cta.component.scss']
})
export class StickyCtaComponent {}
