import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})
export class TeamComponent {
  team = [
    {
      id: 1,
      name: 'Alipbek Azamat',
      role: 'Project Manager',
      icon: '👨‍💼',
      email: 'a.alipbek@cyberkorgau.kz',
      linkedin: '#',
      github: '#',
      // Unsplash суреті - нақты адамдардың орнына тегін суреттер
      photoUrl: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      name: 'Daulet Konakbayev',
      role: 'Lead Developer',
      icon: '💻',
      email: 'd.konakbayev@cyberkorgau.kz',
      linkedin: '#',
      github: '#',
      photoUrl: ''
    },
    {
      id: 3,
      name: 'Bizhan Kanat',
      role: 'Security Analyst',
      icon: '🔒',
      email: 'b.kanat@cyberkorgau.kz',
      linkedin: '#',
      github: '#',
      photoUrl: ''
    },
    {
      id: 4,
      name: 'Abdulmukhit Nurkazy',
      role: 'UI/UX Designer',
      icon: '🎨',
      email: 'a.nurkazy@cyberkorgau.kz',
      linkedin: '#',
      github: '#',
      photoUrl: ''
    },
    {
      id: 5,
      name: 'Akbota Askarova',
      role: 'Content Writer',
      icon: '📝',
      email: 'a.askarova@cyberkorgau.kz',
      linkedin: '#',
      github: '#',
      photoUrl: ''
    },
    {
      id: 6,
      name: 'Bekzhanay Aitakhun',
      role: 'Marketing Lead',
      icon: '📢',
      email: 'b.aitakhun@cyberkorgau.kz',
      linkedin: '#',
      github: '#',
      photoUrl: ''
    }
  ];
}