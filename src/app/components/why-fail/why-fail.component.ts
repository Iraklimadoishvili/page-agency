import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-fail',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './why-fail.component.html',
  styleUrl: './why-fail.component.scss'
})
export class WhyFailComponent {
  painPoints = [
    {
      icon: 'bi bi-hourglass-split',
      title: 'Slow Loading',
      description: 'Visitors leave if your site takes too long to load.'
    },
    {
      icon: 'bi bi-palette',
      title: 'Outdated Design',
      description: 'Old, cluttered layouts make your business look untrustworthy.'
    },
    {
      icon: 'bi bi-phone',
      title: 'No Mobile View',
      description: 'Most customers browse on phones. If your site isn’t mobile-friendly, you lose sales.'
    }
  ];
}
