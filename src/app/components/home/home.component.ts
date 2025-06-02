import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CtaComponent } from '../cta/cta.component';
import { FaqComponent } from '../faq/faq.component';
import { HeroComponent } from '../hero/hero.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { PricingComponent } from '../pricing/pricing.component';
import { ServicesComponent } from '../services/services.component';
import { WhyFailComponent } from '../why-fail/why-fail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WhyFailComponent, ServicesComponent, PricingComponent, FaqComponent, CtaComponent, ContactFormComponent, RouterLink, HowItWorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
