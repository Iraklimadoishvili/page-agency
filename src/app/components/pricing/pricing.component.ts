import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NgFor,CommonModule],
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
      question: 'Can I cancel anytime?',
      answer: 'Yes! There are no contracts. Cancel whenever you like.'
    },
    {
      question: 'What if I’m not happy?',
      answer: 'We’ll work with you until you’re satisfied, or you get your money back.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'Nope! Your monthly price is all you pay.'
    },
    {
      question: 'How do I get started?',
      answer: 'Just click “Get Started Now” and we’ll guide you through the next steps.'
    }
  ];
}
