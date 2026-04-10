import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  startTest() {
    this.router.navigate(['/services']);
  }
}