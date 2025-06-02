import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      const { name, business, email, phone, message } = form.value;
      // Log to console
      console.log('Contact Form Submission:', form.value);
      // Optionally open mailto link
      // window.location.href = `mailto:info@youragency.com?subject=Demo Audit Request&body=Name: ${name}%0DBusiness: ${business}%0DEmail: ${email}%0DPhone: ${phone}%0DMessage: ${message}`;
      form.reset();
    }
  }
}
