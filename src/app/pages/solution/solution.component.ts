import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.css']
})
export class SolutionComponent {
  solutions = [
    {
      icon: '🔍',
      title: 'Автоматты Vulnerability Scan',
      description: 'Сіздің сайтыңызды әлсіздіктерге тексеру'
    },
    {
      icon: '🧠',
      title: 'AI-мен қауіптерді ерте анықтау',
      description: 'Жасанды интеллект 24/7 мониторинг жасайды'
    },
    {
      icon: '🎮',
      title: 'Симуляциялық шабуылдар',
      description: 'Нақты шабуылдарды қауіпсіз ортада үйреніңіз'
    },
    {
      icon: '📜',
      title: 'Тегін курстар мен сертификаттар',
      description: 'Халықаралық стандарттарға сай оқыту'
    }
  ];
}