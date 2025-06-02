import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'bi bi-laptop',
      name: 'We make your current website look modern and professional.',
      description: 'Perfect for businesses with an outdated or cluttered site. We give your site a fresh, trustworthy look that customers love.'
    },
    {
      icon: 'bi bi-phone',
      name: 'We fix your site so it works perfectly on phones and tablets.',
      description: 'Great for anyone whose site is hard to use on mobile. We make sure your business looks great and works fast on every device.'
    },
    {
      icon: 'bi bi-bar-chart',
      name: 'We help your site appear better on Google.',
      description: 'Ideal for small businesses who want to be found online. We set up the basics so more people can discover you.'
    }
  ];
}
