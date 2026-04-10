import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {
  simulationMessage = '';
  
  // Курстар тізімі (кеңейтілген)
  courses = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Кибергигиена негіздері',
      description: 'Парольдер, 2FA, қауіпсіз браузер, антивирус баптау',
      duration: '2 сағат',
      level: 'Бастаушы',
      lessons: 8,
      students: 1245,
      certificate: true,
      topics: ['Қауіпсіз пароль құру', 'Екі факторлы аутентификация', 'Фишингтен қорғану', 'Антивирус орнату']
    },
    {
      id: 2,
      icon: '🔐',
      title: 'Шағын бизнесті қорғау',
      description: 'VPN, антивирус, firewall баптау, деректерді шифрлау',
      duration: '4 сағат',
      level: 'Орта',
      lessons: 12,
      students: 892,
      certificate: true,
      topics: ['Корпоративтік қауіпсіздік', 'VPN конфигурациясы', 'Firewall ережелері', 'Деректер резерві']
    },
    {
      id: 3,
      icon: '🤖',
      title: 'AI көмегімен қауіптерді анықтау',
      description: 'Жасанды интеллект негіздері, аномалияларды анықтау',
      duration: '6 сағат',
      level: 'Кәсіби',
      lessons: 15,
      students: 567,
      certificate: true,
      topics: ['Machine Learning негіздері', 'Аномалияларды анықтау', 'AI SIEM жүйелері']
    },
    {
      id: 4,
      icon: '📱',
      title: 'Мобильді қауіпсіздік',
      description: 'Android/iOS қорғанысы, мобильді вирустар, қауіпсіз қосымшалар',
      duration: '3 сағат',
      level: 'Бастаушы',
      lessons: 10,
      students: 734,
      certificate: true,
      topics: ['Мобильді вирустар', 'Қауіпсіз қосымшалар', 'Желілік шабуылдар']
    },
    {
      id: 5,
      icon: '🌐',
      title: 'Желілік қауіпсіздік',
      description: 'Wireshark, Nmap, DDoS қорғанысы, желі мониторингі',
      duration: '5 сағат',
      level: 'Орта',
      lessons: 14,
      students: 623,
      certificate: true,
      topics: ['Wireshark негіздері', 'DDoS қорғанысы', 'Желілік аудит']
    },
    {
      id: 6,
      icon: '📜',
      title: 'GDPR және ISO 27001',
      description: 'Халықаралық стандарттар, деректер қорғау заңдары',
      duration: '4 сағат',
      level: 'Кәсіби',
      lessons: 11,
      students: 456,
      certificate: true,
      topics: ['GDPR талаптары', 'ISO 27001 сертификаты', 'Аудит негіздері']
    }
  ];
  
  // YouTube видеолары
  // Қазақша видеолар
  videos = [
    {
      title: 'Киберқауіпсіздік бойынша негізгі кеңестер',
      url: 'https://www.youtube.com/embed/3Kb0VwQ5q7E',
      thumbnail: 'https://img.youtube.com/vi/3Kb0VwQ5q7E/maxresdefault.jpg'
      
    },
    {
      title: 'Қалай хакер болмауға болады?',
      url: 'https://www.youtube.com/embed/6J_wfGq5v5k',
      thumbnail: 'https://img.youtube.com/vi/6J_wfGq5v5k/maxresdefault.jpg'
      
    },
    {
      title: 'Интернетте қауіпсіз жүру ережелері',
      url: 'https://youtu.be/W6NQC7Mb-a4?si=75jBmTN9Pp6wuHV2',
      thumbnail: 'https://img.youtube.com/vi/9Zv7Y9Q5p7k/maxresdefault.jpg'
    }
  ];
  
  // Жетістіктер/Сертификаттар
  achievements = [
    { icon: '🎓', title: 'Кибергигиена', students: 1245, color: '#00ffcc' },
    { icon: '🏆', title: 'Бизнес қорғаныс', students: 892, color: '#ffaa44' },
    { icon: '⭐', title: 'AI Қауіптер', students: 567, color: '#44ff88' },
    { icon: '📱', title: 'Мобильді қауіпсіздік', students: 734, color: '#ff44aa' }
  ];
  
  // Статистика
  stats = {
    totalStudents: 4517,
    totalCourses: 6,
    totalLessons: 70,
    avgRating: 4.8
  };
  
  selectedVideo: any = null;
  
  constructor() {}
  
  enroll(course: any) {
    alert(`✅ Сіз "${course.title}" курсына сәтті тіркелдіңіз!
    
📧 Растау хаты сіздің email-ге жіберілді.
📜 Курсты аяқтағаннан кейін сертификат аласыз.
⏱️ Курс ұзақтығы: ${course.duration}
📚 Сабақтар саны: ${course.lessons}

Сабақтарды бастау үшін "Менің курстарым" бөліміне өтіңіз.`);
  }
  
  startSimulation() {
    this.simulationMessage = '🎯 Симуляция басталды! Сізге күдікті сілтеме келіп түсті. Сілтемені баспаңыз, хабарламаны жойыңыз. Бұл дұрыс шешім! Дұрыс жауап бердіңіз! 🎉';
    setTimeout(() => {
      this.simulationMessage = '';
    }, 5000);
  }
  
  watchVideo(video: any) {
    this.selectedVideo = video;
    // Видео модальды терезеде ашылады
  }
  
  closeVideo() {
    this.selectedVideo = null;
  }
}