import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Бұл жолды түзетіңіз

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ✅ FormsModule қосылды
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  
  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      console.log('Form submitted:', this.formData);
      setTimeout(() => this.submitted = false, 5000);
      this.formData = { name: '', email: '', subject: '', message: '' };
    } else {
      alert('Барлық өрістерді толтырыңыз!');
    }
  }
  
  callEmergency() {
    alert('Төтенше жағдай қызметіне қосылуда... +112');
  }
}