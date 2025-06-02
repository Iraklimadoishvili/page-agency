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
      question: 'How long does it take to fix my website?',
      answer: 'Most fixes and upgrades are completed within 7 days. We’ll give you a clear timeline before we start.'
    },
    {
      question: 'Do I need to know anything technical?',
      answer: 'Nope! We handle everything for you and explain things in plain English.'
    },
    {
      question: 'What if I don’t like the changes?',
      answer: 'We’ll work with you until you’re happy. Your satisfaction is guaranteed.'
    },
    {
      question: 'Is there a contract or setup fee?',
      answer: 'No contracts or hidden fees. You can cancel anytime.'
    }
  ];
}
