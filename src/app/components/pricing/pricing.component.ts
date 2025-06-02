import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  pricingTiers = [
    {
      name: 'Starter',
      price: '$99/mo',
      icon: 'bi bi-lightning',
      description: 'Perfect for new businesses who want a modern, reliable website.',
      features: [
        'Modern website redesign',
        'Basic mobile optimization',
        'Monthly performance report',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      price: '$199/mo',
      icon: 'bi bi-graph-up',
      description: 'For growing brands who need mobile optimization and ongoing support.',
      features: [
        'Everything in Starter',
        'Advanced mobile optimization',
        'Conversion boost audit',
        'Monthly updates',
        'Priority email support'
      ]
    },
    {
      name: 'Pro',
      price: '$399/mo',
      icon: 'bi bi-stars',
      description: 'For serious growth and businesses that want the best.',
      features: [
        'Everything in Growth',
        'SEO upgrade',
        'A/B testing & analytics',
        'Unlimited updates',
        'Phone & chat support'
      ]
    }
  ];

  compareTable = [
    { label: 'Modern Redesign', starter: true, growth: true, pro: true },
    { label: 'Mobile Optimization', starter: 'Basic', growth: 'Advanced', pro: 'Advanced' },
    { label: 'Conversion Audit', starter: false, growth: true, pro: true },
    { label: 'SEO Upgrade', starter: false, growth: false, pro: true },
    { label: 'Monthly Updates', starter: false, growth: true, pro: true },
    { label: 'Performance Reports', starter: true, growth: true, pro: true },
    { label: 'Support', starter: 'Email', growth: 'Priority Email', pro: 'Phone & Chat' }
  ];

  faqs = [
    {
      question: 'What happens after I click Get Started?',
      answer: 'You’ll be taken to a short contact form. Once we get your info, we’ll review your business and send you a custom response within 24 hours. No payment is needed upfront.'
    },
    {
      question: 'What if I already have a website?',
      answer: 'Great! We’ll audit your current website and suggest ways to improve it. If it works well, we’ll just upgrade parts of it — no need to start from scratch.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. Our subscriptions are month-to-month. Cancel anytime, no questions asked.'
    },
    {
      question: 'What if I don’t know which plan to choose?',
      answer: 'No worries. Just send us your website link, and we’ll recommend the best plan for your needs — free.'
    },
    {
      question: 'How long does it take to redesign a website?',
      answer: 'Most websites take 5–7 days to complete, depending on your content and goals.'
    },
    {
      question: 'Can I talk to someone before choosing a plan?',
      answer: 'Yes! Just go to the Contact page and let us know — we’ll reply quickly and can even schedule a free call.'
    }
  ];
}
