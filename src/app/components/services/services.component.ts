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
      icon: 'bi bi-tools',
      name: 'Website Fix',
      description: 'We repair broken, confusing, or outdated websites so your business looks its best.'
    },
    {
      icon: 'bi bi-phone',
      name: 'Mobile Optimization',
      description: 'We make sure your site looks and works great on every phone and tablet.'
    },
    {
      icon: 'bi bi-graph-up',
      name: 'Conversion Boost',
      description: 'We help turn more visitors into customers with simple, proven tweaks.'
    },
    {
      icon: 'bi bi-bar-chart',
      name: 'SEO Upgrade',
      description: 'We help your business show up higher on Google so more people find you.'
    }
  ];
}
