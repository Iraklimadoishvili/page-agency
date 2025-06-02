import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'testimonials', loadComponent: () => import('./components/testimonials/testimonials.component').then(m => m.TestimonialsComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact-form/contact-form.component').then(m => m.ContactFormComponent) },
  { path: 'pricing', loadComponent: () => import('./components/pricing/pricing.component').then(m => m.PricingComponent) },
  { path: 'faq', loadComponent: () => import('./components/faq/faq.component').then(m => m.FaqComponent) },
  { path: 'why-fail', loadComponent: () => import('./components/why-fail/why-fail.component').then(m => m.WhyFailComponent) },
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent)
  },
  { path: '**', redirectTo: '' }
];

