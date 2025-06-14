import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {
      icon: '⏱️',
      question: 'How long does it take to fix my website?',
      answer: 'Most fixes and upgrades are completed within 7 days. We’ll give you a clear timeline before we start.'
    },
    {
      icon: '🤖',
      question: 'Do I need to know anything technical?',
      answer: 'Nope! We handle everything for you and explain things in plain English.'
    },
    {
      icon: '👍',
      question: 'What if I’m not satisfied with the service?',
      answer: 'No worries! We offer a 14-day money-back guarantee if you’re not happy with the results.'
    },
    {
      icon: '🔄',
      question: 'Can I upgrade or downgrade plans?',
      answer: 'Yes, you can switch between plans at any time. Changes apply next billing cycle — no penalties.'
    },
    {
      icon: '💸',
      question: 'Is there a contract or setup fee?',
      answer: 'No contracts or hidden fees. You can cancel anytime.'
    }
  ];
}
