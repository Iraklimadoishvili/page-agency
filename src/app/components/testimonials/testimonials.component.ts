import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: 'Page Agency transformed our online presence. The results were beyond our expectations!',
      name: 'Alex Johnson',
      role: 'CEO, TechNova'
    },
    {
      quote: 'Professional, creative, and always on time. Highly recommended for any digital project.',
      name: 'Maria Lee',
      role: 'Marketing Director, GreenLeaf'
    },
    {
      quote: 'Their attention to detail and design skills are unmatched. We love our new site!',
      name: 'Samuel Kim',
      role: 'Founder, UrbanStyle'
    }
  ];
}
