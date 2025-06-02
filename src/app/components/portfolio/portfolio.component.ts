import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Modern Website Redesign',
      before: 'assets/demo1-before.jpg',
      after: 'assets/demo1-after.jpg',
      caption: 'We transformed a cluttered, outdated homepage into a clean, modern design. Navigation is now simple and mobile-friendly.'
    },
    {
      title: 'Brand Identity Refresh',
      before: 'assets/demo2-before.jpg',
      after: 'assets/demo2-after.jpg',
      caption: 'Updated colors, fonts, and layout to match the client’s new brand. The site now looks professional and trustworthy.'
    },
    {
      title: 'E-commerce UI Upgrade',
      before: 'assets/demo3-before.jpg',
      after: 'assets/demo3-after.jpg',
      caption: 'Improved product pages for faster loading and easier checkout. Mobile shopping is now a breeze.'
    },
    {
      title: 'Demo Project: Local Bakery',
      before: 'assets/demo4-before.jpg',
      after: 'assets/demo4-after.jpg',
      caption: 'Gave a local bakery’s site a fresh, appetizing look and made it easy for customers to order online.'
    },
    {
      title: 'Demo Project: Fitness Studio',
      before: 'assets/demo5-before.jpg',
      after: 'assets/demo5-after.jpg',
      caption: 'Created a welcoming, energetic design and made class signups simple on any device.'
    }
  ];
}
